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
    valid: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      error: null,
      valid: true
    }
  },

  getDefaultProps: function() {
    return {
      formatInput: false,
      placeHolder: 'MM / YY',
      name: 'credit-card-expire',
      id: 'credit-card-expire'
    };
  },

  handleChange: function(elm){

    if( !this.formatting)
    {
      this.formatting = true;
      Payment.formatCardExpiry(document.querySelector('.credit-card-expire-input'));
    }

    var expires = elm.target.value;
    var is_valid = false;
    var self = this;

    if(expires.length > 0)
    {
      var date = expires.split(' / ');
      if(date.length === 2)
      {
        is_valid = Payment.fns.validateCardExpiry(date[0], date[1]);
      }
    }
    else
    {
      is_valid = true;
    }

    clearTimeout(this.intent);
    this.intent = setTimeout(function(){
      self.setState({
        valid: is_valid,
        error: (is_valid) ? null : 'Invalid Expiration Date'
      });
    }, 500);
  },

  render: function() {
    return require('../templates/creditCardExpireTemplate.jsx')(this);
  }
});
