var React = require('react');
var classNames = require('classnames');

module.exports = function(props) {
  var classes = {
    'btn': true,
    'btn-primary': props.primary,
    'btn-secondary': props.secondary,
    'btn-success': props.success,
    'btn-info': props.info,
    'btn-warning': props.warning,
    'btn-danger': props.danger,
    'btn-block': props.block,
    'small': props.small,
    'large': props.large,
    'extra-large': props.extraLarge
  };
  return (
    <button className={classNames(classes)} disabled={props.disabled} type={props.type}>
      {props.children}
    </button>
  );
};