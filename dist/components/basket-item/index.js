'use strict';
var React = require('react');
var Anchor = require('../anchor');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    price: React.PropTypes.node,
    title: React.PropTypes.node,
    toggleDescription: React.PropTypes.bool,
    handleRemove: React.PropTypes.func,
    children: React.PropTypes.node
  },
  getInitialState: function getInitialState() {
    return {
      descriptionVisibility: !this.props.toggleDescription
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      title: null,
      price: null,
      handleRemove: null,
      toggleDescription: false
    };
  },
  toggleDescriptionVisibility: function toggleDescriptionVisibility(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ descriptionVisibility: !this.state.descriptionVisibility });
  },
  titleNode: function titleNode() {
    if (this.props.title === null) return null;
    // Only wrap the title if it's not an element already.
    if (this.props.toggleDescription && !React.isValidElement(this.props.title)) return React.createElement(
      Anchor,
      { handleClick: this.toggleDescriptionVisibility },
      this.props.title
    );
    return this.props.title;
  },
  removeNode: function removeNode() {
    if (this.props.handleRemove === null) return null;
    return React.createElement(
      Anchor,
      { handleClick: this.props.handleRemove, role: 'button' },
      'remove'
    );
  },
  render: function render() {
    var titleNode = this.titleNode();
    var descriptionStyle = {
      'display': this.state.descriptionVisibility || titleNode === null ? 'block' : 'none'
    };
    return React.createElement(
      'div',
      { className: 'component-basket-item' },
      this.props.title ? React.createElement(
        'div',
        { className: 'component-basket-row' },
        React.createElement(
          'div',
          { className: 'component-basket-item-title' },
          titleNode
        ),
        React.createElement(
          'div',
          { className: 'component-basket-item-total' },
          this.props.price
        )
      ) : null,
      React.createElement(
        'div',
        { className: 'component-basket-row' },
        React.createElement(
          'div',
          { className: 'component-basket-item-description', style: descriptionStyle },
          this.props.children
        ),
        React.createElement(
          'div',
          { className: 'component-basket-item-remove' },
          this.removeNode()
        )
      )
    );
  }
});
