'use strict'

const React = require('react')
const classNames = require('classnames')
const PropTypes = require('prop-types')

module.exports = React.createClass({

  propTypes: {
    title: PropTypes.string,
    children: PropTypes.any,
    purpose: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large'])
  },

  render: function () {
    const classes = classNames('component-alert', this.props.size, this.props.purpose)
    return (
      <div className={classes} role='alert'>
        {this.props.title ? <h4>{this.props.title}</h4> : ''}
        <p>{this.props.children}</p>
      </div>
    )
  }
})
