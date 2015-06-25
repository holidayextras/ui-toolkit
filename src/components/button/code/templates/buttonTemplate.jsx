var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  var propClasses = ['size', 'purpose'];
  var classes = getComponentClasses('component-button', propClasses, this.props);
  var dataAttributes = this.getDataAttributesFromProps();

  return (
    <button className={classNames(classes)} disabled={this.props.disabled} type={this.props.type} onClick={this.props.handleClick} {...dataAttributes}>
      {this.props.children}
    </button>
  );
};
