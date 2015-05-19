var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function(context) {

  var propClasses = ['size', 'purpose'];
  var classes = getComponentClasses('component-button', propClasses, context.props);
  var dataAttributes = context.getDataAttributesFromProps();

  return (
    <button className={classNames(classes)} disabled={context.props.disabled} type={context.props.type} onClick={context.props.handleClick} {...dataAttributes}>
      {context.props.children}
    </button>
  );
};
