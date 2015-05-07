var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function(props) {

  var propClasses = ['size', 'purpose', 'position'];
  var classes = getComponentClasses('component-flag', propClasses, props);

  return (
    <span className={classNames(classes)}>
      {props.children}
    </span>
  );
};