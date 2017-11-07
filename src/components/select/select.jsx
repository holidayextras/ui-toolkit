'use strict'

const React = require('react')
const DataAttributesMixin = require('react-data-attributes-mixin')

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  propTypes: {
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    children: React.PropTypes.array,
    handleChange: React.PropTypes.func,
    data: React.PropTypes.object,
    multiple: React.PropTypes.bool
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
    const dataAttributes = this.getDataAttributesFromProps()

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
