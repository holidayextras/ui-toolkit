'use strict';
var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  propTypes: {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func,
    handleLoad: React.PropTypes.func,
    href: React.PropTypes.string,
    srcSet: React.PropTypes.string,
    sizes: React.PropTypes.string
  },

  render: function() {
    var dataAttributes = this.getDataAttributesFromProps();
    var sizes = this.props.sizes || '100vw';
    if (this.props.href) {
      return (
        <a className="component-image" href={this.props.href} onClick={this.props.handleClick} {...dataAttributes} >
          <img src={this.props.src} srcSet={this.props.srcSet} alt={this.props.alt} sizes={sizes} onLoad={this.props.handleLoad} />
        </a>
      );
    }
    return (
      <img className="component-image" src={this.props.src} srcSet={this.props.srcSet} alt={this.props.alt} sizes={sizes} onClick={this.props.handleClick} onLoad={this.props.handleLoad} {...dataAttributes} />
    );
  }
});
