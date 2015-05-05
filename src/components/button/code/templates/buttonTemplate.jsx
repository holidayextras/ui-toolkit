var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function(props) {

  var propClasses = ['size', 'purpose'];
  var classes = getComponentClasses('component-button', propClasses, props);

  return (
    <button className={classNames(classes)} disabled={props.disabled} type={props.type}>
      {props.children}
    </button>
  );
};