'use strict'

const React = require('react')
const DataAttributesMixin = require('react-data-attributes-mixin')
const classNames = require('classnames')

module.exports = React.createClass({

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
    const dataAttributes = this.getDataAttributesFromProps()

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
