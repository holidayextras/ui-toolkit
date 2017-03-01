'use strict';
var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');
var classNames = require('classnames');

var _ = {
  extend: require('lodash/extend'),
  omit: require('lodash/omit')
};

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  propTypes: {
    children: React.PropTypes.any,
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: function(props, propName, componentName) {
      // expects a string with any combination of the following class names
      const propValue = props[propName];
      const expectedValues = ['default', 'small', 'medium', 'large', 'extra-large', 'block'];
      const pattern = new RegExp('^(' + expectedValues.join('|') + '|\s)*$');
      if (propValue && !pattern.test(propValue)) {
        return new Error('Invalid prop `' + propName + '` of value `' + propValue
          + '` supplied to `' + componentName + '`, expected any of ["'
          + expectedValues.join('", "') + '"]. Validation failed.');
      }
      return undefined;
    },
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    type: React.PropTypes.string,
    target: React.PropTypes.string,
    handleClick: React.PropTypes.func,
    data: React.PropTypes.object,
    id: React.PropTypes.string
  },

  _getProps() {
    const props = _.omit(this.props, ['data', 'size', 'purpose']);
    props.className = classNames('component-button', this.props.size, this.props.purpose);

    // this is for legacy usage whilst we deprepecate handleClick
    if (!props.onClick && props.handleClick) {
      props.onClick = props.handleClick;
    }

    return _.extend({}, props, this.getDataAttributesFromProps());
  },

  render() {
    return this.props.href ? <a {...this._getProps()} /> : <button {...this._getProps()} />;
  }

});
