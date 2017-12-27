'use strict'

const React = require('react')
const classNames = require('classnames')
const PropTypes = require('prop-types')
const { flatten } = require('../helpers')

const _ = {
  extend: require('lodash/extend'),
  omit: require('lodash/omit')
}

const Button = (props) => {
  // this is for legacy usage whilst we deprecate handleClick
  const onClick = props.onClick || props.handleClick
  const className = classNames('component-button', props.size, props.purpose)

  const fixedProps = _.extend(
    {},
    _.omit(props, ['data', 'size', 'purpose', 'onClick', 'handleClick']),
    flatten(props.data),
    {
      onClick,
      className
    }
  )

  return props.href ? <a {...fixedProps} /> : <button {...fixedProps} />
}

Button.propTypes = {
  children: PropTypes.any,
  purpose: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
  size: function (props, propName, componentName) {
    // expects a string with any combination of the following class names
    const propValue = props[propName]
    const expectedValues = ['default', 'small', 'medium', 'large', 'extra-large', 'block']
    const pattern = new RegExp('^(' + expectedValues.join('|') + '|\\s)*$')
    if (propValue && !pattern.test(propValue)) {
      return new Error('Invalid prop `' + propName + '` of value `' + propValue +
        '` supplied to `' + componentName + '`, expected any of ["' +
        expectedValues.join('", "') + '"]. Validation failed.')
    }
    return undefined
  },
  disabled: PropTypes.bool,
  href: PropTypes.string,
  type: PropTypes.string,
  target: PropTypes.string,
  handleClick: PropTypes.func,
  data: PropTypes.object,
  id: PropTypes.string
}

module.exports = Button
