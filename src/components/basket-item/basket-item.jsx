'use strict'

const React = require('react')
const Anchor = require('../anchor')
const PropTypes = require('prop-types')

class BasketItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      descriptionVisibility: !props.toggleDescription
    }

    this.toggleDescriptionVisibility = this.toggleDescriptionVisibility.bind(this)
  }

  toggleDescriptionVisibility (e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ descriptionVisibility: !this.state.descriptionVisibility })
  }

  titleNode () {
    const { title, toggleDescription } = this.props
    if (title === null) return null
    // Only wrap the title if it's not an element already.
    if (toggleDescription && !React.isValidElement(title)) {
      return (
        <Anchor handleClick={this.toggleDescriptionVisibility}>
          {title}
        </Anchor>
      )
    }
    return title
  }

  removeNode () {
    const { handleRemove } = this.props
    if (handleRemove === null) return null
    return (
      <Anchor handleClick={handleRemove} role='button'>remove</Anchor>
    )
  }

  render () {
    const titleNode = this.titleNode()
    const descriptionStyle = {
      'display': (this.state.descriptionVisibility || titleNode === null) ? 'block' : 'none'
    }
    const { children, title, price } = this.props
    return (
      <div className='component-basket-item' >
        {(title)
          ? <div className='component-basket-row'>
            <div className='component-basket-item-title'>{titleNode}</div>
            <div className='component-basket-item-total'>{price}</div>
          </div>
          : null}
        <div className='component-basket-row'>
          <div className='component-basket-item-description' style={descriptionStyle}>{children}</div>
          <div className='component-basket-item-remove'>{this.removeNode()}</div>
        </div>
      </div>
    )
  }
}

BasketItem.propTypes = {
  price: PropTypes.node,
  title: PropTypes.node,
  toggleDescription: PropTypes.bool,
  handleRemove: PropTypes.func,
  children: PropTypes.node
}

BasketItem.defaultProps = {
  title: null,
  price: null,
  handleRemove: null,
  toggleDescription: false
}

module.exports = BasketItem
