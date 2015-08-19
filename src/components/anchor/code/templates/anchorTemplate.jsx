var React = require('react');

module.exports = function() {

  var dataAttributes = this.getDataAttributesFromProps();
  var target = "_" + this.props.target;

  return (
    <a className="component-anchor" {...dataAttributes} title={this.props.title} href={this.props.href} onClick={this.props.handleClick} target={target}>
     {this.props.children}
    </a>
  );
};
