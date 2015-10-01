var React = require('react');

module.exports = function() {

  var dataAttributes = this.getDataAttributesFromProps();
  var sizes = this.props.sizes || '100vw';

  return (
    <img className="component-image" src={this.props.src} srcSet={this.props.srcSet} alt={this.props.alt} sizes={sizes} onClick={this.props.handleClick} {...dataAttributes} />
  );
};
