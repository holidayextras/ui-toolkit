'use strict'

const React = require('react')
const classNames = require('classnames')
const PropTypes = require('prop-types')

const PaymentCard = (props) => {
  const { size, type, className } = props
  const classes = classNames('component-payment-card', type, size, className)

  const spreadProps = {}
  for (const key in props) {
    if (['type', 'size', 'className', 'children'].indexOf(key) !== -1) continue
    spreadProps[key] = props[key]
  }

  return (
    <div className={classes} {...spreadProps} />
  )
}

PaymentCard.propTypes = {
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
  type: PropTypes.oneOf(['amazon', 'amex', 'apple', 'cirrus', 'delta', 'directdebit', 'discover', 'electron', 'google', 'maestro', 'mastercard', 'paym', 'paypal', 'sage', 'sepa', 'solo', 'switch', 'ukash', 'visa', 'visadebit', 'westernunion']),
  className: PropTypes.string
}

module.exports = PaymentCard
