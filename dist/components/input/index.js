'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');
var classNames = require('classnames');

module.exports = React.createClass({
  displayName: 'exports',

  mixins: [DataAttributesMixin],

  intent: null,

  propTypes: {
    label: React.PropTypes.string,
    type: React.PropTypes.oneOf(['text', 'email', 'number', 'tel']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    placeHolder: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    ref: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    required: React.PropTypes.bool,
    validator: React.PropTypes.instanceOf(RegExp),
    errorMessage: React.PropTypes.string,
    children: React.PropTypes.string,
    handleChange: React.PropTypes.func,
    data: React.PropTypes.object
  },

  getInitialState: function getInitialState() {
    return {
      value: this.props.children,
      error: null,
      valid: true
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      type: 'text',
      disabled: false,
      readOnly: false,
      required: false,
      errorMessage: 'Invalid Input',
      id: 'component-input',
      name: 'component-input',
      placeHolder: ''
    };
  },

  validate: function validate(value) {
    var self = this;
    var isValid = true;
    var error = null;

    if (value !== '' && typeof self.props.validator !== 'undefined') {
      isValid = self.props.validator.test(value);
    }

    if (!isValid) {
      error = self.props.errorMessage;
    }

    self.setState({
      valid: isValid,
      error: error
    });
  },

  handleChange: function handleChange(e) {
    var self = this;
    var value = e.target ? e.target.value : null;

    self.setState({
      value: value
    });

    clearTimeout(this.intent);
    this.intent = setTimeout(function () {
      self.validate(value);
    }, 500);

    if (self.props.handleChange) {
      self.props.handleChange.apply(this, arguments);
    }
  },

  render: function render() {
    var classes = classNames({
      'component-input': true,
      'error': this.state.error || false,
      'disabled': this.props.disabled || false
    });
    var dataAttributes = this.getDataAttributesFromProps();

    // the form label
    var label;

    if (this.props.label) {
      label = React.createElement(
        'label',
        { className: 'component-input-label', 'aria-label': this.props.id, htmlFor: this.props.id },
        this.props.label
      );
    }

    /**
     * Create the span element used for containing messages
     * related to the element.
     */
    var span;

    if (this.state.error) {
      span = React.createElement(
        'span',
        { className: 'component-input-error' },
        this.state.error
      );
    }

    return React.createElement(
      'div',
      { className: classes, ref: this.props.ref },
      label,
      React.createElement('input', _extends({
        className: 'component-input-field',
        type: this.props.type,
        name: this.props.name,
        value: this.state.value,
        'aria-labelledby': this.props.label,
        id: this.props.id,
        placeholder: this.props.placeholder,
        onChange: this.handleChange,
        disabled: this.props.disabled,
        readOnly: this.props.readOnly,
        required: this.props.required
      }, dataAttributes)),
      span
    );
  }
});
