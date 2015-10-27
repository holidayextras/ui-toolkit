'use strict';
var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
  propTypes: {
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    type: React.PropTypes.oneOf(['amazon', 'amex', 'apple', 'cirrus', 'delta', 'directdebit', 'discover', 'electron', 'google', 'maestro', 'mastercard', 'paym', 'paypal', 'sage', 'sepa', 'solo', 'switch', 'ukash', 'visa', 'visadebit', 'westernunion'])
  },

  render: function() {
    var classes = classNames('component-payment-card', this.props.type, this.props.size);
    return (
        <div className={classes}></div>
    );
  }
});
