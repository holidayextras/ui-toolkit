'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');

module.exports = React.createClass({
  displayName: 'exports',

  mixins: [DataAttributesMixin],

  propTypes: {
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    children: React.PropTypes.array,
    handleChange: React.PropTypes.func,
    data: React.PropTypes.object,
    multiple: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      id: 'component-select',
      name: 'component-select',
      multiple: false
    };
  },

  handleChange: function handleChange() {
    if (this.props.handleChange) {
      this.props.handleChange.apply(this, arguments);
    }
  },

  render: function render() {
    var classes = 'component-select';
    var dataAttributes = this.getDataAttributesFromProps();

    var label;
    if (this.props.label) {
      label = React.createElement(
        'label',
        { className: 'component-select-label', htmlFor: this.props.id },
        this.props.label
      );
    }

    if (this.props.multiple) {
      classes += ' multiple';
    }

    return React.createElement(
      'div',
      { className: classes },
      label,
      React.createElement(
        'select',
        _extends({
          className: 'component-select-field',
          name: this.props.name,
          id: this.props.id,
          onChange: this.handleChange,
          multiple: this.props.multiple
        }, dataAttributes),
        this.props.children
      )
    );
  }
});
