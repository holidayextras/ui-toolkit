'use strict';
var React = require('react');

module.exports = React.createClass({
  propTypes: {
    currencySymbol: React.PropTypes.string,
    price: React.PropTypes.number,
    children: React.PropTypes.node
  },
  getDefaultProps: function() {
    return {
      currencySymbol: '£'
    };
  },
  render: function() {
    var priceNode;
    if (this.props.price) {
      priceNode = (
        <div className="component-basket-item-price">
          <span className="component-currency">{this.props.currencySymbol}</span>{this.props.price}
        </div>
      );
    }
    return (
      <div className="component-basket-item">
        <div className="component-basket-item-description">{this.props.children}</div>
        {priceNode}
      </div>
    );
  }
});
