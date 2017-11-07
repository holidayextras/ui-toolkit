'use strict'

var React = require('react')

module.exports = React.createClass({

  propTypes: {
    children: React.PropTypes.any
  },

  render: function () {
    return (
      <li className='component-list-item'>
        {this.props.children}
      </li>
    )
  }
})
