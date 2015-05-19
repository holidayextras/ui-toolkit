var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function(context) {

  var propClasses = ['size', 'purpose'];
  var classes = getComponentClasses('component-button', propClasses, context.props);
  var dataAttributes = context.getDataAttributesFromProps();

  return (
    <a className={classNames(classes)} href={context.props.href} target={context.props.target} onClick={context.props.handleClick} {...dataAttributes}>
      {context.props.children}
    </a>
  );
};
