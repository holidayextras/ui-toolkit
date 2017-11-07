'use strict'

const React = require('react')
const DataAttributesMixin = require('react-data-attributes-mixin')
const PropTypes = require('prop-types')

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  getDefaultProps: function () {
    return {
      href: '#',
      role: 'link'
    }
  },

  propTypes: {
    handleClick: PropTypes.func,
    children: PropTypes.node,
    data: PropTypes.object,
    href: PropTypes.string,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
    title: PropTypes.string,
    role: PropTypes.string
  },

  render: function () {
    if (!this.props.children) {
      return null
    }
    const dataAttributes = this.getDataAttributesFromProps()
    return (
      <a className='component-anchor' {...dataAttributes} title={this.props.title} role={this.props.role} href={this.props.href} onClick={this.props.handleClick} target={this.props.target}>
        {this.props.children}
      </a>
    )
  }
})
