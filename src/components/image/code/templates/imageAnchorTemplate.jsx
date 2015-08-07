var React = require('react');

module.exports = function() {

  var dataAttributes = this.getDataAttributesFromProps();

  return (
    <a className="component-image" href={this.props.href} onClick={this.props.handleClick} {...dataAttributes} >
      <img alt={this.props.alt} src={this.props.src} />
    </a>
  );
};
