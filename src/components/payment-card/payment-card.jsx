'use strict';
var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
  propTypes: {
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    type: React.PropTypes.oneOf(['amazon', 'amex', 'apple', 'cirrus', 'delta', 'directdebit', 'discover', 'electron', 'google', 'maestro', 'mastercard', 'paym', 'paypal', 'sage', 'sepa', 'solo', 'switch', 'ukash', 'visa', 'visadebit', 'westernunion'])
  },

  render: function() {
    const { className, size, type, children, ...props } = this.props;
    const classes = classNames('component-payment-card', type, size, className);
    
    return (
        <div className={classes} {...props} />
    );
  }
});
