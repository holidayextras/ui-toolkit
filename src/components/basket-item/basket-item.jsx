'use strict';
var React = require('react');

module.exports = React.createClass({
  propTypes: {
    currencySymbol: React.PropTypes.string,
    freeText: React.PropTypes.string,
    removeText: React.PropTypes.string,
    price: React.PropTypes.number,
    title: React.PropTypes.node,
    toggleDescription: React.PropTypes.bool,
    handleRemove: React.PropTypes.func,
    children: React.PropTypes.node
  },
  getInitialState: function() {
    return {
      descriptionVisibility: !this.props.toggleDescription
    };
  },
  getDefaultProps: function() {
    return {
      currencySymbol: '£',
      freeText: 'FREE',
      removeText: 'remove',
      toggleDescription: false
    };
  },
  toggleDescriptionVisibility: function() {
    this.setState({ descriptionVisibility: !this.state.descriptionVisibility });
  },
  titleNode: function() {
    if (!this.props.title) return null;
    if (React.isValidElement(this.props.title)) return this.props.title;
    if (this.props.toggleDescription) return (<a onClick={this.toggleDescriptionVisibility}>{this.props.title}</a>);
    return this.props.title;
  },
  priceNode: function() {
    if (this.props.price === null) return null;
    if (this.props.price === 0) {
      return (<div className="component-basket-item-price">{this.props.freeText}</div>);
    }
    return (
      <div className="component-basket-item-price">
        <span className="component-currency">{this.props.currencySymbol}</span><span className="component-price">{this.props.price}</span>
      </div>
    );
  },
  removeNode: function() {
    if (!this.props.handleRemove) return null;
    return (
      <div className="component-basket-item-remove">
        <a onClick={this.props.handleRemove}>{this.props.removeText}</a>
      </div>
    );
  },
  render: function() {
    var descriptionStyle = {
      'display': this.state.descriptionVisibility ? 'block' : 'none'
    };
    return (
      <div className="component-basket-item">
        <div className="component-basket-row">
          <div className="component-basket-item-title">{this.titleNode()}</div>
          {this.priceNode()}
        </div>
        <div className="component-basket-row">
          <div className="component-basket-item-description" style={descriptionStyle}>{this.props.children}</div>
          {this.removeNode()}
        </div>
      </div>
    );
  }
});
