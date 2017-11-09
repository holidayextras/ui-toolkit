'use strict'

const React = require('react')
const classNames = require('classnames')
const PropTypes = require('prop-types')

const Alert = ({
  title,
  children,
  purpose,
  size
}) => (
  <div className={classNames('component-alert', size, purpose)} role='alert'>
    {title ? <h4>{title}</h4> : ''}
    <p>{children}</p>
  </div>
)

Alert.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  purpose: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large'])
}

module.exports = Alert
