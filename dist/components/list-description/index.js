'use strict';
var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    children: React.PropTypes.any
  },

  render: function render() {
    return React.createElement(
      'dd',
      { className: 'component-list-description' },
      this.props.children
    );
  }
});
