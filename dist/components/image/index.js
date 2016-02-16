'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');

module.exports = React.createClass({
  displayName: 'exports',

  mixins: [DataAttributesMixin],

  propTypes: {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func,
    href: React.PropTypes.string,
    srcSet: React.PropTypes.string,
    sizes: React.PropTypes.string
  },

  render: function render() {
    var dataAttributes = this.getDataAttributesFromProps();
    var sizes = this.props.sizes || '100vw';
    if (this.props.href) {
      return React.createElement(
        'a',
        _extends({ className: 'component-image', href: this.props.href, onClick: this.props.handleClick }, dataAttributes),
        React.createElement('img', { src: this.props.src, srcSet: this.props.srcSet, alt: this.props.alt, sizes: sizes })
      );
    }
    return React.createElement('img', _extends({ className: 'component-image', src: this.props.src, srcSet: this.props.srcSet, alt: this.props.alt, sizes: sizes, onClick: this.props.handleClick }, dataAttributes));
  }
});
