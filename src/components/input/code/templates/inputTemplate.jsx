var React = require('react');
var classNames = require('classnames');

module.exports = function (component){

  var classes = classNames({
    'component-input': true,
    'error': component.state.error || false,
    'disabled': component.props.disabled || false
  });

  // the form label
  var label;

  if (component.props.label){
    label = ( <label className="component-input-label" htmlFor={component.props.id}>{component.props.label}</label > );
  }

  /**
   * Create the span element used for containing messages
   * related to the element.
   */
  var span;

  if (component.state.error){
    span = ( <span className="component-input-error">{component.state.error}</span> );
  }

  return (
    <div className={classes} ref={component.props.ref}>
      {label}
      <input
        className="component-input-field"
        type={component.props.type}
        valid={component.state.valid}
        name={component.props.name}
        id={component.props.id}
        placeholder={component.props.placeholder}
        onChange={component.handleChange}
        defaultValue={component.props.defaultValue}
        disabled={component.props.disabled}
        readOnly={component.props.readOnly}
        required={component.props.required}
        />
      {span}
    </div>
  );
};
