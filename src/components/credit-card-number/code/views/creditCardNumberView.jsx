var React = require('react');

module.exports = React.createClass({

  propTypes: {
    cardNumber: React.PropTypes.string,
    cardType: React.PropTypes.string
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
      formatInput: false,
      showImages: false,
      placeHolder: '• • • •   • • • •   • • • •   • • • •'
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

    var defaultFormat = /(\d{1,4})/g;

    var cards = [
      {
        type: 'maestro',
        pattern: /^(5018|5020|5038|6304|6759|676[1-3]|6768|5612|5893|6304|6759|0604|6390)/,
        format: defaultFormat,
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        cvcLength: [3],
        luhn: true
      },
      {
        type: 'diners_club',
        pattern: /^(36|38|30[0-5])/,
        format: defaultFormat,
        length: [14],
        cvcLength: [3],
        luhn: true
      },
      {
        type: 'laser',
        pattern: /^(6706|6771|6709)/,
        format: defaultFormat,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: true
      },
      {
        type: 'jcb',
        pattern: /^35/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
      },
      {
        type: 'china_union',
        pattern: /^62/,
        format: defaultFormat,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: false
      },
      {
        type: 'discover',
        pattern: /^(6011|65|64[4-9]|622)/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
      },
      {
        type: 'mastercard',
        pattern: /^5[1-5]/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
      },
      {
        type: 'amex',
        pattern: /^3[47]/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [15],
        cvcLength: [3, 4],
        luhn: true
      },
      {
        type: 'visa',
        pattern: /^4/,
        format: defaultFormat,
        length: [13, 14, 15, 16],
        cvcLength: [3],
        luhn: true
      }
    ];

    for (var i=0; i<cards.length; i++) {
      var card = cards[i];
      if (card.pattern.test(cardNumber))
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
