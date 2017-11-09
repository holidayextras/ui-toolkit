'use strict'

const React = require('react')
const classNames = require('classnames')
const PropTypes = require('prop-types')
const { flatten } = require('../helpers')

module.exports = React.createClass({
  intent: null,

  propTypes: {
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', 'number', 'tel']),
    size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    placeHolder: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    ref: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    validator: PropTypes.instanceOf(RegExp),
    errorMessage: PropTypes.string,
    children: PropTypes.string,
    handleChange: PropTypes.func,
    data: PropTypes.object
  },

  getInitialState: function () {
    return {
      value: this.props.children,
      error: null,
      valid: true
    }
  },

  getDefaultProps: function () {
    return {
      type: 'text',
      disabled: false,
      readOnly: false,
      required: false,
      errorMessage: 'Invalid Input',
      id: 'component-input',
      name: 'component-input',
      placeHolder: ''
    }
  },

  validate: function (value) {
    const self = this
    let isValid = true
    let error = null

    if (value !== '' && typeof self.props.validator !== 'undefined') {
      isValid = self.props.validator.test(value)
    }

    if (!isValid) {
      error = self.props.errorMessage
    }

    self.setState({
      valid: isValid,
      error: error
    })
  },

  handleChange: function (e) {
    const self = this
    const value = (e.target) ? e.target.value : null

    self.setState({
      value: value
    })

    clearTimeout(this.intent)
    this.intent = setTimeout(function () {
      self.validate(value)
    }, 500)

    if (self.props.handleChange) {
      self.props.handleChange.apply(this, arguments)
    }
  },

  render: function () {
    const classes = classNames({
      'component-input': true,
      'error': this.state.error || false,
      'disabled': this.props.disabled || false
    })
    const dataAttributes = flatten(this.props.data)

    // the form label
    let label

    if (this.props.label) {
      label = (<label className='component-input-label' aria-label={this.props.id} htmlFor={this.props.id}>{this.props.label}</label >)
    }

    /**
     * Create the span element used for containing messages
     * related to the element.
     */
    let span

    if (this.state.error) {
      span = (<span className='component-input-error'>{this.state.error}</span>)
    }

    return (
      <div className={classes} ref={this.props.ref}>
        {label}
        <input
          className='component-input-field'
          type={this.props.type}
          name={this.props.name}
          value={this.state.value}
          aria-labelledby={this.props.label}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          required={this.props.required}
          {...dataAttributes}
        />
        {span}
      </div>
    )
  }
})
