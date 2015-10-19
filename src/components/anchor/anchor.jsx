'use strict';
var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  getDefaultProps: function() {
    return {
      href: '#'
    };
  },

  propTypes: {
    handleClick: React.PropTypes.function,
    children: React.PropTypes.node,
    data: React.PropTypes.object,
    href: React.PropTypes.string,
    target: React.PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
    title: React.PropTypes.string
  },

  render: function() {
    if (!this.props.children) {
      return null;
    }
    var dataAttributes = this.getDataAttributesFromProps();
    return (
      <a className="component-anchor" {...dataAttributes} title={this.props.title} href={this.props.href} onClick={this.props.handleClick} target={this.props.target}>
      {this.props.children}
      </a>
    );
  }
});
