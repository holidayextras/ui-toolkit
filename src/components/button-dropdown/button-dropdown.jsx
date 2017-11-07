'use strict'

const React = require('react')
const classNames = require('classnames')

module.exports = React.createClass({

  propTypes: {
    children: React.PropTypes.any,
    position: React.PropTypes.oneOf(['top', 'bottom'])
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
