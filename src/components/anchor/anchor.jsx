'use strict';
const React = require('react');
const DataAttributesMixin = require('react-data-attributes-mixin');
const { arrayOf, func, node, object, oneOf, string } = React.PropTypes;
const _ = {
  union: require('lodash.union')
};

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
      className: _.union(['component-anchor'], this.props.classes),
      title: this.props.title,
      role: this.props.role,
      href: this.props.href,
      onClick: this.props.handleClick,
      target: this.props.target
    };
    return <a {...props} {...dataAttributes}>{this.props.children}</a>;
  }
});
