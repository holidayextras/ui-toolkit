'use strict'

const React = require('react')
const PropTypes = require('prop-types')
const { flatten } = require('../helpers')

module.exports = React.createClass({
  propTypes: {
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.array,
    handleChange: PropTypes.func,
    data: PropTypes.object,
    multiple: PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      id: 'component-select',
      name: 'component-select',
      multiple: false
    }
  },

  handleChange: function () {
    if (this.props.handleChange) {
      this.props.handleChange.apply(this, arguments)
    }
  },

  render: function () {
    let classes = 'component-select'
    const dataAttributes = flatten(this.props.data)

    let label
    if (this.props.label) {
      label = (<label className='component-select-label' htmlFor={this.props.id}>{this.props.label}</label >)
    }

    if (this.props.multiple) {
      classes += ' multiple'
    }

    return (
      <div className={classes}>
        {label}
        <select
          className='component-select-field'
          name={this.props.name}
          id={this.props.id}
          onChange={this.handleChange}
          multiple={this.props.multiple}
          {...dataAttributes}
          >
          {this.props.children}
        </select>
      </div>
    )
  }
})
