'use strict'

const React = require('react')
const DataAttributesMixin = require('react-data-attributes-mixin')

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  getDefaultProps: function () {
    return {
      href: '#',
      role: 'link'
    }
  },

  propTypes: {
    handleClick: React.PropTypes.func,
    children: React.PropTypes.node,
    data: React.PropTypes.object,
    href: React.PropTypes.string,
    target: React.PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
    title: React.PropTypes.string,
    role: React.PropTypes.string
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
