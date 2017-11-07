'use strict'

const React = require('react')
const DataAttributesMixin = require('react-data-attributes-mixin')
const PropTypes = require('prop-types')

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  propTypes: {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    handleLoad: PropTypes.func,
    href: PropTypes.string,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
    srcSet: PropTypes.string,
    sizes: PropTypes.string
  },

  render: function () {
    const dataAttributes = this.getDataAttributesFromProps()
    const sizes = this.props.sizes || '100vw'
    if (this.props.href) {
      return (
        <a className='component-image' href={this.props.href} target={this.props.target} onClick={this.props.handleClick} {...dataAttributes} >
          <img src={this.props.src} srcSet={this.props.srcSet} alt={this.props.alt} sizes={sizes} onLoad={this.props.handleLoad} />
        </a>
      )
    }
    return (
      <img className='component-image' src={this.props.src} srcSet={this.props.srcSet} alt={this.props.alt} sizes={sizes} onClick={this.props.handleClick} onLoad={this.props.handleLoad} {...dataAttributes} />
    )
  }
})
