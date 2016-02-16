'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');

module.exports = React.createClass({
  displayName: 'exports',

  mixins: [DataAttributesMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      href: '#',
      role: 'link'
    };
  },

  propTypes: {
    handleClick: React.PropTypes.func,
    children: React.PropTypes.node,
    data: React.PropTypes.object,
    href: React.PropTypes.string,
    target: React.PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
    title: React.PropTypes.string,
    role: React.PropTypes.string
  },

  render: function render() {
    if (!this.props.children) {
      return null;
    }
    var dataAttributes = this.getDataAttributesFromProps();
    return React.createElement(
      'a',
      _extends({ className: 'component-anchor' }, dataAttributes, { title: this.props.title, role: this.props.role, href: this.props.href, onClick: this.props.handleClick, target: this.props.target }),
      this.props.children
    );
  }
});
