/** @jsx React.DOM */

var React = require('react');
module.exports = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['amazon','amex','apple','cirrus','delta','directdebit','discover','electron','google','maestro','mastercard','paym','paypal','sage','sepa','solo','switch','ukash','visa','visadebit','western union']),
  },

  render: function() {
    return require('../templates/paymentCardTemplate.jsx').call(this);
  }
});
