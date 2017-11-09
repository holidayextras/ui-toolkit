'use strict'

const React = require('react')
const classNames = require('classnames')
const PropTypes = require('prop-types')

const Flag = ({
  children,
  purpose,
  size,
  position
}) => (
  <span className={classNames('component-flag', size, purpose, position)}>
    {children}
  </span>
)

Flag.propTypes = {
  children: PropTypes.any,
  purpose: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
  position: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'top left',
    'bottom left',
    'top right',
    'bottom right',
    'left top',
    'left bottom',
    'right top',
    'right bottom',
    'left right',
    'right left'
  ])
}

module.exports = Flag
