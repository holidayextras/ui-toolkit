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

    var is_valid = Payment.fns.validateCardNumber(this.props.defaultValue);
    var card_type = Payment.fns.cardType(this.props.defaultValue);

    return {
      valid: is_valid,
      error: (is_valid) ? null : this.props.errorMessage,
      cardType: card_type
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

  handleChange: function(elm) {

    if( !this.formatting && this.props.formatInput) {
      this.formatting = true;
      Payment.formatCardNumber(document.querySelector('.credit-card-number-input'));
    }

    var card_number = elm.target.value;
    var card_type = null;
    var is_valid = true;
    var self = this;

    if(card_number.length > 0) {
      is_valid = Payment.fns.validateCardNumber(card_number);
      card_type = Payment.fns.cardType(card_number);

      if(this.props.accepted.indexOf(card_type) === -1){
        is_valid = false;
      }
    }

    clearTimeout(this.intent);
    this.intent = setTimeout(function(){
      self.setState({
        valid: is_valid,
        error: (is_valid) ? null : self.props.errorMessage,
        cardType: card_type
      });
    }, 500);
  },

  render: function() {
    return require('../templates/creditCardNumberTemplate.jsx')(this);
  }
});
