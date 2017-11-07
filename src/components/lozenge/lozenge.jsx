'use strict'

const React = require('react')
const classNames = require('classnames')
const PropTypes = require('prop-types')

const Lozenge = ({
  tip,
  children,
  purpose,
  size
}) => (
  <span className={classNames('component-lozenge', size, purpose)} title={tip}>
    {children}
  </span>
)

Lozenge.propTypes = {
  tip: PropTypes.string,
  children: PropTypes.any,
  purpose: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large', 'block'])
}

module.exports = Lozenge
