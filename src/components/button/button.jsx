'use strict';
var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');
var classNames = require('classnames');

var _ = {
  omit: require('lodash/object/omit')
};

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
    const props = _.omit(this.props, 'children');
    props.className = classNames('component-button', this.props.size, this.props.purpose);

    var dataAttributes = this.getDataAttributesFromProps();

    return (
      <a {...props} {...dataAttributes}>
        {this.props.children}
      </a>
    );
  },

  renderButton: function() {
    const props = _.omit(this.props, 'children');
    props.className = classNames('component-button', this.props.size, this.props.purpose);

    var dataAttributes = this.getDataAttributesFromProps();

    return (
      <button {...props} {...dataAttributes}>
        {this.props.children}
      </button>
    );
  }

});
