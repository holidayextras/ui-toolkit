var React = require('react/addons');
var classnames = require('classnames');

module.exports = function(props) {
  var classes = classnames(props.className, {
    'component-lozenge': true,
    'label': true,
    'has-tooltip': (props.tip),
    'label-primary': (props.purpose === 'primary'),
    'label-success': (props.purpose === 'success'),
    'label-info': (props.purpose === 'info'),
    'label-warning': (props.purpose === 'warning'),
    'label-danger': (props.purpose === 'danger'),
    'label-default': (!props.purpose || ['primary', 'success', 'info', 'warning', 'danger'].indexOf(props.purpose) === -1)
  });

  return (
    <span className={classes} title={props.tip}>
      {props.children}
    </span>
  );
};
