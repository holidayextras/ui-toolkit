var React = require('react');
var classNames = require('classnames');

module.exports = function (component){

  var classes = classNames('input-group', {
    'component-input': true,
    'input-group-error': component.state.error || false,
    'input-group-disabled': component.props.disabled || false
  });

  // the form label
  var label;

  if (component.props.label){
    label = ( <label className="component-input-label input-group-label" htmlFor={component.props.id}>{component.props.label}</label > );
  }

  /**
   * Create the span element used for containing messages
   * related to the element.
   */
  var span;

  if (component.state.error)
  {
    span = ( <span className="input-group-span component-input-error">{component.state.error}</span> );
  }

  return (
    <div className={classes} ref={component.props.ref}>
      {label}
      <input
        className="input-group-field component-input-field"
        type={component.props.type}
        valid={component.state.valid}
        name={component.props.name}
        id={component.props.id}
        placeholder={component.props.placeholder}
        onChange={component.changeHandler}
        defaultValue={component.props.defaultValue}
        disabled={component.props.disabled}
        readOnly={component.props.readOnly}
        required={component.props.required}
        />
      {span}
    </div>
  );
};
