'use strict'

const React = require('react')
const PropTypes = require('prop-types')

module.exports = React.createClass({

  propTypes: {
    children: PropTypes.any
  },

  render: function () {
    return (
      <dd className='component-list-description'>
        {this.props.children}
      </dd>
    )
  }
})
