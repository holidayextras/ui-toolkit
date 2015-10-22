'use strict';

var React = require('react');
var Button = require('../button');
var Input = require('../input');

module.exports = React.createClass({

  propTypes: {
    value: React.PropTypes.number,
    onChange: React.PropTypes.func,
    minValue: React.PropTypes.number,
    maxValue: React.PropTypes.number,
    incrementDisplayString: React.PropTypes.string,
    decrementDisplayString: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      value: 0,
      incrementDisplayString: '+',
      decrementDisplayString: '-',
      onChange: function() {}
    };
  },

  decrement: function() {
    if (!this.canDecrement()) return;
    this.props.onChange(this.props.value - 1);
  },

  increment: function() {
    if (!this.canIncrement()) return;
    this.props.onChange(this.props.value + 1);
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

        <Input type="text" key={this.props.value} readOnly={true}>{this.props.value.toString()}</Input>

        <span className="button-container">
          <Button handleClick={this.increment} type="button" disabled={!this.canIncrement()}>{this.props.incrementDisplayString}</Button>
        </span>
      </div>
    );
  }
});
