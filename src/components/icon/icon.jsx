'use strict'

const React = require('react')
const PropTypes = require('prop-types')

module.exports = React.createClass({

  propTypes: {
    icon: PropTypes.string.isRequired,
    iconFamily: PropTypes.oneOf(['font-awesome', 'glyphicon'])
  },

  getDefaultProps: function () {
    return {
      iconFamily: 'font-awesome'
    }
  },

  getIconFamily: function () {
    let iconFamily = this.props.iconFamily
    if (this.props.iconFamily === 'font-awesome') {
      iconFamily = 'fa'
    }
    return iconFamily
  },

  getIcon: function () {
    return this.getIconFamily() + '-' + this.props.icon
  },

  render: function () {
    return (
      <i className={'component-icon ' + this.getIconFamily() + ' ' + this.getIcon()} aria-hidden='true' />
    )
  }
})
