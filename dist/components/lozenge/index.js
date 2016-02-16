'use strict';
var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    tip: React.PropTypes.string,
    children: React.PropTypes.any,
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large', 'block'])
  },

  render: function render() {
    var classes = classNames('component-lozenge', this.props.size, this.props.purpose);
    return React.createElement(
      'span',
      { className: classes, title: this.props.tip },
      this.props.children
    );
  }
});
