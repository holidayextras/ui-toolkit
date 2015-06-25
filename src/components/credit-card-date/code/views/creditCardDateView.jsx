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

    var elm = document.querySelector('.credit-card-date-input');

    if( !this.formatting && elm){
      this.formatting = true;

      Payment.formatCardExpiry(elm);
    }

    var expires = (e.target) ? e.target.value : null;
    var isValid = true;
    var self = this;

    if(expires.length > 0){
      isValid = false;
      var date = expires.split(' / ');
      if(date.length === 2){
        isValid = Payment.fns.validateCardExpiry(date[0], date[1]);
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
