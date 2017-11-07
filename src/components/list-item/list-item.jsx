'use strict'

const React = require('react')
const PropTypes = require('prop-types')

module.exports = React.createClass({

  propTypes: {
    children: PropTypes.any
  },

  render: function () {
    return (
      <li className='component-list-item'>
        {this.props.children}
      </li>
    )
  }
})
