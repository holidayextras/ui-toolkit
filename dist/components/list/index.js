'use strict';
var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    children: React.PropTypes.any,
    type: React.PropTypes.oneOf(['ordered', 'unordered', 'description', 'icon'])
  },

  render: function render() {
    if (this.props.type === 'ordered') {
      return React.createElement(
        'ol',
        { className: 'component-ordered-list' },
        this.props.children
      );
    } else if (this.props.type === 'icon') {
      return React.createElement(
        'ul',
        { className: 'component-icon-list' },
        this.props.children
      );
    } else if (this.props.type === 'description') {
      return React.createElement(
        'dl',
        { className: 'component-description-list' },
        this.props.children
      );
    }
    return React.createElement(
      'ul',
      { className: 'component-unordered-list' },
      this.props.children
    );
  }
});
