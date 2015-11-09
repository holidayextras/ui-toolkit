'use strict';

var React = require('react');
var Button = require('../button');
var Input = require('../input');

module.exports = React.createClass({

  propTypes: {
    value: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired,
    minValue: React.PropTypes.number,
    maxValue: React.PropTypes.number,
    stepValue: React.PropTypes.number,
    incrementDisplayString: React.PropTypes.string,
    decrementDisplayString: React.PropTypes.string,
    id: React.PropTypes.string,
    label: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      value: 0,
      stepValue: 1,
      incrementDisplayString: '+',
      decrementDisplayString: '-'
    };
  },

  decrement: function() {
    if (!this.canDecrement()) return;
    this.props.onChange(this.props.value - this.props.stepValue);
  },

  increment: function() {
    if (!this.canIncrement()) return;
    this.props.onChange(this.props.value + this.props.stepValue);
  },

  canIncrement: function() {
    if (this.props.maxValue === undefined) return true;
    return this.props.value < this.props.maxValue;
  },

  canDecrement: function() {
    if (this.props.minValue === undefined) return true;
    return this.props.value > this.props.minValue;
  },

  render: function() {
    return (
      <div className="component-stepper">
        <span className="button-container">
          <Button handleClick={this.decrement} type="button" disabled={!this.canDecrement()}>{this.props.decrementDisplayString}</Button>
        </span>

        <Input type="text" id={this.props.id} key={this.props.value} readOnly={true} label={this.props.label}>{this.props.value.toString()}</Input>

        <span className="button-container">
          <Button handleClick={this.increment} type="button" disabled={!this.canIncrement()}>{this.props.incrementDisplayString}</Button>
        </span>
      </div>
    );
  }
});
