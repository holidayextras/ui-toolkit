var React = require('react/addons');
var classnames = require('classnames');

module.exports = function(props) {
  var classes = classnames(props.className, {
    'component-lozenge': true,
    'label': true,
    'has-tooltip': (props.tip),
    'label-primary': (props.primary || props.purpose === 'primary'),
    'label-success': (props.success || props.purpose === 'success'),
    'label-info': (props.info || props.purpose === 'info'),
    'label-warning': (props.warning || props.purpose === 'warning'),
    'label-danger': (props.danger || props.purpose === 'danger'),
    'label-default': (!props.primary && !props.success && !props.info && !props.warning && !props.danger && !props.purpose)
  });

  return (
    <span className={classes} title={props.tip}>
      {props.children}
    </span>
  );
};
