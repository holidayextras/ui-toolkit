'use strict'

const React = require('react')
const classNames = require('classnames')

module.exports = React.createClass({

  propTypes: {
    tip: React.PropTypes.string,
    children: React.PropTypes.any,
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large', 'block'])
  },

  render: function () {
    const classes = classNames('component-lozenge', this.props.size, this.props.purpose)
    return (
      <span className={classes} title={this.props.tip}>
        {this.props.children}
      </span>
    )
  }
})
