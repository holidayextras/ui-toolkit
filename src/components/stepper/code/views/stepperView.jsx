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
      value: this.props.value,
      canIncrement: true,
      canDecrement: true
    };
  },

  decrement: function() {
    console.log('in decrement');
    if (!this.state.canDecrement) return;
    console.log('AFTER THE RETURN IN DECRMENT');
    var value = this.state.value - 1;
    this.setState({ value: value });
    this.props.onChange(this.state.value);
    this.incrementDecrementButtonState();
  },

  incrementDecrementButtonState: function() {
    var canDecrement = true;
    var canIncrement = true;

    if( this.props.minValue !== undefined ) {
      canDecrement = this.state.value > this.props.minValue;
    }

    if( this.props.maxValue !== undefined ) {
      canIncrement = this.state.value < this.props.maxValue;
    }

    this.setState({
      canIncrement: canIncrement,
      canDecrement: canDecrement
    });

    console.log('canIncrement', this.state.canIncrement);
    console.log('canDecrement', this.state.canDecrement);


  },

  increment: function() {
    if (!this.state.canIncrement) return;
    var value = this.state.value + 1;
    this.setState({ value: value });
    this.props.onChange(this.state.value);
    this.incrementDecrementButtonState();
  },

  render: function() {
    return require('../templates/stepperTemplate.jsx').call(this);
  }
});