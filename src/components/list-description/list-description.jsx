'use strict'

const React = require('react')

module.exports = React.createClass({

  propTypes: {
    children: React.PropTypes.any
  },

  render: function () {
    return (
      <dd className='component-list-description'>
        {this.props.children}
      </dd>
    )
  }
})
