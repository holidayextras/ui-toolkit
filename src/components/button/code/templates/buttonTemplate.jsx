var React = require('react');
var classNames = require('classnames');

module.exports = function(props) {
  var classes = ['component-button'];

  if(props.size) {
    classes.push(props.size);
  }

  if(props.purpose) {
    classes.push(props.purpose);
  }

  return (
    <button className={classNames(classes)} disabled={props.disabled} type={props.type}>
      {props.children}
    </button>
  );
};