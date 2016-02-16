'use strict';
var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    title: React.PropTypes.string,
    children: React.PropTypes.any,
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large'])
  },

  render: function render() {
    var classes = classNames('component-alert', this.props.size, this.props.purpose);
    return React.createElement(
      'div',
      { className: classes, role: 'alert' },
      this.props.title ? React.createElement(
        'h4',
        null,
        this.props.title
      ) : '',
      React.createElement(
        'p',
        null,
        this.props.children
      )
    );
  }
});
