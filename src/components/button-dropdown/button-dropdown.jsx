'use strict'

const React = require('react')
const classNames = require('classnames')
const PropTypes = require('prop-types')

const ButtonDropdown = ({
  children,
  position
}) => (
  <div className={classNames('component-button-dropdown', position)}>
    {children}
  </div>
)

ButtonDropdown.propTypes = {
  children: PropTypes.any,
  position: PropTypes.oneOf(['top', 'bottom'])
}

module.exports = ButtonDropdown
