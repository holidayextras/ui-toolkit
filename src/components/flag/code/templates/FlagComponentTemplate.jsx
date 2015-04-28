var React = require('react');
var classNames = require('classnames');

module.exports = function(props) {
  var classes = {
    'ui-component-flag': true,
    'flag-left': props.left,
    'flag-right': props.right,
    'flag-top': props.top,
    'flag-bottom': props.bottom,
    'flag-primary': props.primary,
    'flag-secondary': props.secondary,
    'flag-success': props.success,
    'flag-info': props.info,
    'flag-warning': props.warning,
    'flag-danger': props.danger,
    'flag-sm': props.small,
    'flag-md': props.medium,
    'flag-lg': props.large
  };
  return (
    <span className={classNames(classes)}>
      {props.children}
    </span>
  );
};