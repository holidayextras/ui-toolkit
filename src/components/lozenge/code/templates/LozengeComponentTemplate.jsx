var React = require('react/addons');
var classnames = require('classnames');

module.exports = function(props) {
  var classes = classnames(props.className, {
    'component-lozenge': true,
    'has-tooltip': (props.tip),
    'primary': (props.purpose === 'primary'),
    'success': (props.purpose === 'success'),
    'info': (props.purpose === 'info'),
    'warning': (props.purpose === 'warning'),
    'danger': (props.purpose === 'danger'),
    'default': (!props.purpose || ['primary', 'success', 'info', 'warning', 'danger'].indexOf(props.purpose) === -1)
  });

  return (
    <span className={classes} title={props.tip}>
      {props.children}
    </span>
  );
};
