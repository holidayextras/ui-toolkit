var React = require('react');
var Payment = require('payment');

module.exports = React.createClass({

  intent: null,
  formatting: false,

  propTypes: {
    label: React.PropTypes.string,
    expireDate: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    valid: React.PropTypes.bool,
    errorMessage: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.defaultValue || '',
      error: null,
      valid: true
    };
  },

  getDefaultProps: function() {
    return {
      placeHolder: 'MM / YY',
      name: 'credit-card-date',
      id: 'credit-card-date',
      errorMessage: 'Invalid Date'
    };
  },

  handleChange: function(e){

    if( !this.formatting && e.target){
      this.formatting = true;
      Payment.formatCardExpiry(e.target);
    }

    var expires = (e.target) ? e.target.value : null;
    var isValid = true;
    var self = this;

    if(expires && expires.length > 0){
      isValid = false;
      var date = expires.match(/(\d{1,2})\s?\/?\s?(\d{2})/);
      if(date && date.length === 3){
        isValid = Payment.fns.validateCardExpiry(date[1], date[2]);
      }
    }

    clearTimeout(this.intent);
    this.intent = setTimeout(function(){
      self.setState({
        valid: isValid,
        error: (isValid) ? null : self.props.errorMessage
      });
    }, 500);

    // @note: adding this because there is a timeout on state change
    // not picked up my unit tests.  But this reflects the values that
    // will be set after timeout executes.
    this.setState({
      unitTestValid: isValid,
      unitTestError: (isValid) ? null : self.props.errorMessage
    });
  },

  render: function() {
    return require('../templates/creditCardDateTemplate.jsx')(this);
  }
});
