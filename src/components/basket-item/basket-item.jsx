'use strict'

const React = require('react')
const Anchor = require('../anchor')

module.exports = React.createClass({
  propTypes: {
    price: React.PropTypes.node,
    title: React.PropTypes.node,
    toggleDescription: React.PropTypes.bool,
    handleRemove: React.PropTypes.func,
    children: React.PropTypes.node
  },
  getInitialState: function () {
    return {
      descriptionVisibility: !this.props.toggleDescription
    }
  },
  getDefaultProps: function () {
    return {
      title: null,
      price: null,
      handleRemove: null,
      toggleDescription: false
    }
  },
  toggleDescriptionVisibility: function (e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ descriptionVisibility: !this.state.descriptionVisibility })
  },
  titleNode: function () {
    if (this.props.title === null) return null
    // Only wrap the title if it's not an element already.
    if (this.props.toggleDescription && !React.isValidElement(this.props.title)) return (<Anchor handleClick={this.toggleDescriptionVisibility}>{this.props.title}</Anchor>)
    return this.props.title
  },
  removeNode: function () {
    if (this.props.handleRemove === null) return null
    return (
      <Anchor handleClick={this.props.handleRemove} role='button'>remove</Anchor>
    )
  },
  render: function () {
    const titleNode = this.titleNode()
    const descriptionStyle = {
      'display': (this.state.descriptionVisibility || titleNode === null) ? 'block' : 'none'
    }
    return (
      <div className='component-basket-item'>
        {(this.props.title)
        ? <div className='component-basket-row'>
          <div className='component-basket-item-title'>{titleNode}</div>
          <div className='component-basket-item-total'>{this.props.price}</div>
        </div>
       : null}
        <div className='component-basket-row'>
          <div className='component-basket-item-description' style={descriptionStyle}>{this.props.children}</div>
          <div className='component-basket-item-remove'>{this.removeNode()}</div>
        </div>
      </div>
    )
  }
})
