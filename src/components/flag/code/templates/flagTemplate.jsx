var React = require('react');
var classNames = require('classnames');

module.exports = function(props) {
  var classes = ['component-flag'];

  if(props.size) {
    classes.push(props.size);
  }

  if(props.purpose) {
    classes.push(props.purpose);
  }

  if(props.position) {
    classes.push(props.position);
  }

  return (
    <span className={classNames(classes)}>
      {props.children}
    </span>
  );
};