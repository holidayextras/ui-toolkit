var React = require('react');

module.exports = function() {

  var dataAttributes = this.getDataAttributesFromProps();

  return (
    <a {...dataAttributes} title={this.props.title} href={this.props.href} onClick={this.props.handleClick}>
     {this.props.children}
    </a>
  );
};
