'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const Icon = ({
  icon,
  iconFamily
}) => {
  const family = iconFamily === 'font-awesome' ? 'fa' : iconFamily
  return (
    <i
      className={'component-icon ' + family + ' ' + family + '-' + icon}
      aria-hidden='true'
    />
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  iconFamily: PropTypes.oneOf(['font-awesome', 'glyphicon'])
}

Icon.defaultProps = {
  iconFamily: 'font-awesome'
}

module.exports = Icon
