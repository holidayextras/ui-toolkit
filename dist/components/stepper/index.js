'use strict';

var React = require('react');
var Button = require('../button');
var Input = require('../input');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    value: React.PropTypes.number,
    valueText: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    minValue: React.PropTypes.number,
    maxValue: React.PropTypes.number,
    stepValue: React.PropTypes.number,
    incrementDisplayString: React.PropTypes.string,
    decrementDisplayString: React.PropTypes.string,
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    readOnly: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      value: 0,
      stepValue: 1,
      incrementDisplayString: '+',
      decrementDisplayString: '-'
    };
  },

  decrement: function decrement() {
    if (!this.canDecrement()) return;
    this.props.onChange(this.props.value - this.props.stepValue);
  },

  increment: function increment() {
    if (!this.canIncrement()) return;
    this.props.onChange(this.props.value + this.props.stepValue);
  },

  canIncrement: function canIncrement() {
    if (this.props.maxValue === undefined) return true;
    return this.props.value < this.props.maxValue;
  },

  canDecrement: function canDecrement() {
    if (this.props.minValue === undefined) return true;
    return this.props.value > this.props.minValue;
  },

  render: function render() {
    var valueText = this.props.valueText || this.props.value;
    return React.createElement(
      'div',
      { className: 'component-stepper' },
      React.createElement(
        'label',
        { className: 'component-stepper-label', htmlFor: this.props.id },
        this.props.label
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          { className: 'button-container' },
          React.createElement(
            Button,
            { handleClick: this.decrement, type: 'button', disabled: !this.canDecrement() },
            this.props.decrementDisplayString
          )
        ),
        React.createElement(
          Input,
          { type: 'text', id: this.props.id, key: this.props.value, readOnly: this.props.readOnly },
          valueText.toString()
        ),
        React.createElement(
          'span',
          { className: 'button-container' },
          React.createElement(
            Button,
            { handleClick: this.increment, type: 'button', disabled: !this.canIncrement() },
            this.props.incrementDisplayString
          )
        )
      )
    );
  }
});
