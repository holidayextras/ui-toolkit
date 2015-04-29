var React = require('react');
var classNames = require('classnames');

module.exports = function(props) {
  var classes = {
    'component-button': true,    
  };
  if(props.size) classes[props.size] = true;
  if(props.purpose) classes[props.purpose] = true

  return (
    <button className={classNames(classes)} disabled={props.disabled} type={props.type}>
      {props.children}
    </button>
  );
};