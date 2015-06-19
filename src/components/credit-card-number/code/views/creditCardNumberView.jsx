var React = require('react');
var Payment = require('payment');

module.exports = React.createClass({

  intent: null,
  formatting: false,

  propTypes: {
    accepted: React.PropTypes.array,
    cardNumber: React.PropTypes.string,
    cardType: React.PropTypes.oneOf(['amex', 'discover', 'mastercard', 'visa']),
    defaultValue: React.PropTypes.string,
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    errorMessage: React.PropTypes.string
  },

  getInitialState: function() {

    var isValid = Payment.fns.validateCardNumber(this.props.defaultValue);
    var cardType = Payment.fns.cardType(this.props.defaultValue);

    return {
      valid: isValid,
      error: (isValid) ? null : this.props.errorMessage,
      cardType: cardType
    };
  },

  getDefaultProps: function() {
    return {
      accepted: ['amex', 'discover', 'mastercard', 'visa'],
      formatInput: false,
      id: 'credit-card-number',
      name: 'credit-card-number',
      placeHolder: '• • • •   • • • •   • • • •   • • • •',
      showImages: false,
      errorMessage: 'Invalid Card Number'
    };
  },

  handleChange: function(e) {

    if( !this.formatting && this.props.formatInput) {
      this.formatting = true;
      Payment.formatCardNumber(document.querySelector('.credit-card-number-input'));
    }

    var cardNumber = e.target.value;
    var cardType = null;
    var isValid = true;
    var self = this;

    if(cardNumber.length > 0) {
      isValid = Payment.fns.validateCardNumber(cardNumber);
      cardType = Payment.fns.cardType(cardNumber);

      if(this.props.accepted.indexOf(cardType) === -1){
        isValid = false;
      }
    }

    clearTimeout(this.intent);
    this.intent = setTimeout(function(){
      self.setState({
        valid: isValid,
        error: (isValid) ? null : self.props.errorMessage,
        cardType: cardType
      });
    }, 500);
  },

  render: function() {
    return require('../templates/creditCardNumberTemplate.jsx')(this);
  }
});
