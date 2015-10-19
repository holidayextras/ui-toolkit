'use strict';
var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../src/utils/getComponentClasses');

module.exports = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['amazon', 'amex', 'apple', 'cirrus', 'delta', 'directdebit', 'discover', 'electron', 'google', 'maestro', 'mastercard', 'paym', 'paypal', 'sage', 'sepa', 'solo', 'switch', 'ukash', 'visa', 'visadebit', 'westernunion'])
  },

  render: function() {
    var propClasses = ['type', 'size'];
    var classes = getComponentClasses('component-payment-card', propClasses, this.props);

    return (
        <div className={classNames(classes)}></div>
    );
  }
});
