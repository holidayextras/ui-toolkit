'use strict'

const React = require('react')
const classNames = require('classnames')
const PropTypes = require('prop-types')

module.exports = React.createClass({

  propTypes: {
    children: PropTypes.any,
    position: PropTypes.oneOf(['top', 'bottom'])
  },

  render: function () {
    const classes = classNames('component-button-dropdown', this.props.position)
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
})
