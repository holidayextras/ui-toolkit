'use strict';

var React = require('react');

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
      onChange: function () {}
    };
  },

  getInitialState: function(){
    return {
      value: this.props.value
    };
  },

  decrement: function() {
    if (!this.canDecrement()) return;
    var value = this.state.value - 1;
    this.setState({ value: value });
    this.props.onChange(this.state.value);
  },

  increment: function() {
    if (!this.canIncrement()) return;
    var value = this.state.value + 1;
    this.setState({ value: value });
    this.props.onChange(this.state.value);
  },

  canIncrement: function(){
    if (this.props.maxValue === undefined) return true;
    return this.state.value < this.props.maxValue;
  },

  canDecrement: function(){
    if (this.props.minValue === undefined) return true;
    return this.state.value > this.props.minValue;
  },

  render: function() {
    return require('../templates/stepperTemplate.jsx').call(this);
  }
});