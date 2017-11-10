'use strict'

const React = require('react')
const PropTypes = require('prop-types')
const Button = require('../button')
const Input = require('../input')

class Stepper extends React.Component {
  constructor (props) {
    super(props)
    this.decrement = this.decrement.bind(this)
    this.increment = this.increment.bind(this)
  }

  decrement () {
    const { value, stepValue, onChange } = this.props
    if (!this.canDecrement()) return
    onChange(value - stepValue)
  }

  increment () {
    const { value, stepValue, onChange } = this.props
    if (!this.canIncrement()) return
    onChange(value + stepValue)
  }

  canIncrement () {
    const { maxValue, value } = this.props
    if (maxValue === undefined) return true
    return value < maxValue
  }

  canDecrement () {
    const { minValue, value } = this.props
    if (minValue === undefined) return true
    return value > minValue
  }

  render () {
    const {
      id,
      label,
      value,
      readOnly,
      decrementDisplayString,
      incrementDisplayString
    } = this.props
    const valueText = this.props.valueText || value

    return (
      <div className='component-stepper'>
        <label className='component-stepper-label' htmlFor={id}>{label}</label>
        <div>
          <span className='button-container'>
            <Button handleClick={this.decrement} type='button' disabled={!this.canDecrement()}>
              {decrementDisplayString}
            </Button>
          </span>

          <Input type='text' id={id} key={value} readOnly={readOnly}>{valueText.toString()}</Input>

          <span className='button-container'>
            <Button handleClick={this.increment} type='button' disabled={!this.canIncrement()}>
              {incrementDisplayString}
            </Button>
          </span>
        </div>
      </div>
    )
  }
}

Stepper.propTypes = {
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
}

Stepper.defaultProps = {
  value: 0,
  stepValue: 1,
  incrementDisplayString: '+',
  decrementDisplayString: '-'
}

module.exports = Stepper
