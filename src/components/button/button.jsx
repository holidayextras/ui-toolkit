'use strict'

const React = require('react')
const DataAttributesMixin = require('react-data-attributes-mixin')
const classNames = require('classnames')
const PropTypes = require('prop-types')

const _ = {
  extend: require('lodash/extend'),
  omit: require('lodash/omit')
}

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  propTypes: {
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
  },

  _getProps () {
    const props = _.omit(this.props, ['data', 'size', 'purpose'])
    props.className = classNames('component-button', this.props.size, this.props.purpose)

    // this is for legacy usage whilst we deprepecate handleClick
    if (!props.onClick && props.handleClick) {
      props.onClick = props.handleClick
    }

    return _.extend({}, props, this.getDataAttributesFromProps())
  },

  render () {
    return this.props.href ? <a {...this._getProps()} /> : <button {...this._getProps()} />
  }

})
