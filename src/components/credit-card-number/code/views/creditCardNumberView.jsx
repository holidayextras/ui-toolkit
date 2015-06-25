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
      value: this.props.defaultValue || '',
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
      errorMessage: 'Invalid Card Number',
      defaultValue: ''
    };
  },

  handleChange: function(e) {

    if( !this.formatting && this.props.formatInput && e.target) {
      this.formatting = true;
      Payment.formatCardNumber(e.target);
    }

    var cardNumber = (e.target) ? e.target.value : '';
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

    // @note: adding this because there is a timeout on state change
    // not picked up my unit tests.  But this reflects the values that
    // will be set after timeout executes.
    this.setState({
      unitTestValid: isValid,
      unitTestError: (isValid) ? null : self.props.errorMessage
    });
  },

  render: function() {
    return require('../templates/creditCardNumberTemplate.jsx')(this);
  }
});
