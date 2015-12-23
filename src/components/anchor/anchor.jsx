'use strict';
const React = require('react');
const DataAttributesMixin = require('react-data-attributes-mixin');
const { arrayOf, func, node, object, oneOf, string } = React.PropTypes;

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  getDefaultProps: function() {
    return {
      href: '#',
      role: 'link'
    };
  },

  propTypes: {
    children: node,
    classes: arrayOf(string),
    data: object,
    handleClick: func,
    href: string,
    key: string,
    role: string,
    target: oneOf(['_self', '_blank', '_parent', '_top']),
    title: string
  },

  render: function() {
    if (!this.props.children) {
      return null;
    }
    const dataAttributes = this.getDataAttributesFromProps();
    const props = {
      className: ['component-anchor'].concat(this.props.classes).join(' '),
      title: this.props.title,
      role: this.props.role,
      href: this.props.href,
      onClick: this.props.handleClick,
      target: this.props.target
    };
    return <a {...props} {...dataAttributes}>{this.props.children}</a>;
  }
});
