var React = require('react');

module.exports = function() {

  var dataAttributes = this.getDataAttributesFromProps();

  return (
    <img alt={this.props.alt} src={this.props.src} onClick={this.props.handleClick} className="component-image" {...dataAttributes} />
  );
};
