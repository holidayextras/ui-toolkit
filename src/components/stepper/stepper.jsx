'use strict'

const React = require('react')
const PropTypes = require('prop-types')
const Button = require('../button')
const Input = require('../input')

module.exports = React.createClass({

  propTypes: {
    value: PropTypes.number,
    valueText: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    stepValue: PropTypes.number,
    incrementDisplayString: PropTypes.string,
    decrementDisplayString: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    readOnly: PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      value: 0,
      stepValue: 1,
      incrementDisplayString: '+',
      decrementDisplayString: '-'
    }
  },

  decrement: function () {
    if (!this.canDecrement()) return
    this.props.onChange(this.props.value - this.props.stepValue)
  },

  increment: function () {
    if (!this.canIncrement()) return
    this.props.onChange(this.props.value + this.props.stepValue)
  },

  canIncrement: function () {
    if (this.props.maxValue === undefined) return true
    return this.props.value < this.props.maxValue
  },

  canDecrement: function () {
    if (this.props.minValue === undefined) return true
    return this.props.value > this.props.minValue
  },

  render: function () {
    const valueText = this.props.valueText || this.props.value
    return (
      <div className='component-stepper'>
        <label className='component-stepper-label' htmlFor={this.props.id}>{this.props.label}</label>
        <div>
          <span className='button-container'>
            <Button handleClick={this.decrement} type='button' disabled={!this.canDecrement()}>{this.props.decrementDisplayString}</Button>
          </span>

          <Input type='text' id={this.props.id} key={this.props.value} readOnly={this.props.readOnly}>{valueText.toString()}</Input>

          <span className='button-container'>
            <Button handleClick={this.increment} type='button' disabled={!this.canIncrement()}>{this.props.incrementDisplayString}</Button>
          </span>
        </div>
      </div>
    )
  }
})
