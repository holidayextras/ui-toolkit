var React = require('react');

module.exports = React.createClass({

  propTypes: {
    accepted: React.PropTypes.array,
    cardNumber: React.PropTypes.string,
    cardType: React.PropTypes.oneOf(['amex', 'discover', 'mastercard', 'visa']),
    defaultValue: React.PropTypes.string,
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    name: React.PropTypes.string
  },

  getInitialState: function() {

    var card = this.updateCard(this.props.defaultValue);

    return {
      cardNumber: card.cardNumber || '',
      cardType: card.cardType || ''
    };
  },

  getDefaultProps: function() {
    return {
      accepted: ['amex', 'discover', 'mastercard', 'visa'],
      formatInput: false,
      id: 'credit-card-number',
      name: 'credit-card-number',
      placeHolder: '• • • •   • • • •   • • • •   • • • •',
      showImages: false
    };
  },

  updateCard: function(cardNumber) {

    if(typeof cardNumber === 'undefined')
    {
      return false;
    }

    var cardInfo = this.getCard(cardNumber);
    var formattedCard = (this.props.formatInput) ? cardNumber.replace(/(.{4})/g, '$1 ').trim() : cardNumber;

    var card = {
      cardNumber: formattedCard,
      cardType: cardInfo.type
    };

    this.setState(card);

    return card;
  },

  getCard: function(cardNumber) {

    var cards = [
      {
        type: 'amex',
        pattern: /^3[47]/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [15]
      },
      {
        type: 'discover',
        pattern: /^(6011|65|64[4-9]|622)/,
        format: /(\d{1,4})/g,
        length: [16]
      },
      {
        type: 'mastercard',
        pattern: /^5[1-5]/,
        format: /(\d{1,4})/g,
        length: [16]
      },
      {
        type: 'visa',
        pattern: /^4/,
        format: /(\d{1,4})/g,
        length: [13, 14, 15, 16]
      }
    ];

    for (var i=0; i<cards.length; i++) {
      var card = cards[i];
      if (card.pattern.test(cardNumber) && this.props.accepted.indexOf(card.type) > -1)
      {
        return card;
      }
    }

    return {
      type: ''
    };
  },

  handleChange: function(e) {
    var cardNumber = e.target.value.replace(/\D/g, '');
    this.updateCard(cardNumber);
  },

  render: function() {
    return require('../templates/creditCardNumberTemplate.jsx')(this);
  }
});
