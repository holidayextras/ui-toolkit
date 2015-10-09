'use strict';
var React = require('react');

module.exports = function() {

  var dataAttributes = this.getDataAttributesFromProps();
  var sizes = this.props.sizes || '100vw';

  return (
    <a className="component-image" href={this.props.href} onClick={this.props.handleClick} {...dataAttributes} >
      <img src={this.props.src} srcSet={this.props.srcSet} alt={this.props.alt} sizes={sizes} />
    </a>
  );
};
