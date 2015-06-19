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
      error: null,
      valid: true
    };
  },

  getDefaultProps: function() {
    return {
      formatInput: false,
      placeHolder: 'MM / YY',
      name: 'credit-card-expire',
      id: 'credit-card-expire',
      errorMessage: 'Invalid Expiration Date'
    };
  },

  handleChange: function(e){

    if( !this.formatting){
      this.formatting = true;
      Payment.formatCardExpiry(document.querySelector('.credit-card-expire-input'));
    }

    var expires = e.target.value;
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
  },

  render: function() {
    return require('../templates/creditCardExpireTemplate.jsx')(this);
  }
});
