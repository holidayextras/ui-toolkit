'use strict'

const React = require('react')
const PropTypes = require('prop-types')

module.exports = React.createClass({

  propTypes: {
    children: PropTypes.any
  },

  render: function () {
    return (
      <dt className='component-list-term'>
        {this.props.children}
      </dt>
    )
  }
})
