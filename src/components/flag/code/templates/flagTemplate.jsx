var React = require('react');
var classNames = require('classnames');

module.exports = function(props) {
  var classes = {
    'component-flag': true,
  };

  if(props.size) {
    classes[props.size] = true;
  }

  if(props.purpose) {
    classes[props.purpose] = true;
  }

  if(props.position) {
    classes[props.position] = true;
  }

  return (
    <span className={classNames(classes)}>
      {props.children}
    </span>
  );
};