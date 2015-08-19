var React = require('react');

module.exports = function() {

  var dataAttributes = this.getDataAttributesFromProps();

  return (
    <a className="component-anchor" {...dataAttributes} title={this.props.title} href={this.props.href} onClick={this.props.handleClick} target={this.props.target}>
     {this.props.children}
    </a>
  );
};
