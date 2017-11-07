'use strict'

const React = require('react')
const classNames = require('classnames')
const PropTypes = require('prop-types')

module.exports = React.createClass({
  propTypes: {
    size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    type: PropTypes.oneOf(['amazon', 'amex', 'apple', 'cirrus', 'delta', 'directdebit', 'discover', 'electron', 'google', 'maestro', 'mastercard', 'paym', 'paypal', 'sage', 'sepa', 'solo', 'switch', 'ukash', 'visa', 'visadebit', 'westernunion']),
    className: PropTypes.string
  },

  render: function () {
    const classes = classNames('component-payment-card', this.props.type, this.props.size, this.props.className)

    const spreadProps = {}
    for (const key in this.props) {
      if (['type', 'size', 'className', 'children'].indexOf(key) !== -1) continue
      spreadProps[key] = this.props[key]
    }

    return (
      <div className={classes} {...spreadProps} />
    )
  }
})
