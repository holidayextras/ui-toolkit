'use strict';
var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');
var classNames = require('classnames');

var _ = {
  extend: require('lodash/object/extend'),
  omit: require('lodash/object/omit')
};

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  propTypes: {
    children: React.PropTypes.any,
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large', 'block']),
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
      props.onClick = props.handleClick
    }

    return _.extend({}, props, this.getDataAttributesFromProps());
  },

  render() {
    return this.props.href ? <a {...this._getProps()} /> : <button {...this._getProps()} />;
  }

});
