var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function(props) {

  var propClasses = ['size', 'purpose'];
  var classes = getComponentClasses('component-button', propClasses, props);

  return (
    <a className={classNames(classes)} href={props.href} target={props.target} onClick={props.handleClick}>
      {props.children}
    </a>
  );
};
