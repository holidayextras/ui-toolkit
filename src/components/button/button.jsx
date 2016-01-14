'use strict';
var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');
var classNames = require('classnames');
module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  propTypes: {
    children: React.PropTypes.any,
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large', 'block']),
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    type: React.PropTypes.string,
    target: React.PropTypes.string,
    handleClick: React.PropTypes.func,
    data: React.PropTypes.object,
    id: React.PropTypes.string
  },

  render: function() {
    return this.props.href ? this.renderAnchor() : this.renderButton();
  },

  renderAnchor: function() {
    var props = {
      id: this.props.id,
      className: classNames('component-button', this.props.size, this.props.purpose),
      href: this.props.href,
      target: this.props.target,
      onClick: this.props.handleClick
    };
    var dataAttributes = this.getDataAttributesFromProps();

    return (
      <a {...props} {...dataAttributes}>
        {this.props.children}
      </a>
    );
  },

  renderButton: function() {
    var props = {
      id: this.props.id,
      className: classNames('component-button', this.props.size, this.props.purpose),
      disabled: this.props.disabled,
      type: this.props.type,
      onClick: this.props.handleClick
    };
    var dataAttributes = this.getDataAttributesFromProps();

    return (
      <button {...props} {...dataAttributes}>
        {this.props.children}
      </button>
    );
  }

});
