'use strict';
var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    children: React.PropTypes.any
  },

  render: function render() {
    return React.createElement(
      'li',
      { className: 'component-list-item' },
      this.props.children
    );
  }
});
