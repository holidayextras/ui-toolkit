'use strict'

const React = require('react')
const PropTypes = require('prop-types')

module.exports = React.createClass({

  propTypes: {
    children: PropTypes.any,
    type: PropTypes.oneOf(['ordered', 'unordered', 'description', 'icon'])
  },

  render: function () {
    if (this.props.type === 'ordered') {
      return (
        <ol className='component-ordered-list'>
          {this.props.children}
        </ol>
      )
    } else if (this.props.type === 'icon') {
      return (
        <ul className='component-icon-list'>
          {this.props.children}
        </ul>
      )
    } else if (this.props.type === 'description') {
      return (
        <dl className='component-description-list'>
          {this.props.children}
        </dl>
      )
    }
    return (
      <ul className='component-unordered-list'>
        {this.props.children}
      </ul>
    )
  }
})
