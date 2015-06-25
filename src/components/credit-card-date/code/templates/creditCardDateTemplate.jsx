var classNames = require('classnames');

module.exports = function(component) {

  var classes = classNames('input-group', {
    'component-input': true,
    'component-credit-card-date': true,
    'input-group-error': component.state.error || false
  });

  var label, error;

  if (component.props.label){
    label = ( <label className="input-group-label credit-card-date-label" htmlFor={component.props.id}>{component.props.label}</label> );
  }

  if (component.state.error){
    error = ( <span className="component-input-error">{component.state.error}</span> );
  }

  return (
    <div className={classes}>
      {label}
      <input
        className="input-group-field component-input-field credit-card-date-input"
        type="text"
        id={component.props.id}
        name={component.props.name}
        autoComplete="off"
        maxLength="7"
        minLength="7"
        onChange={component.handleChange}
        defaultValue={component.props.defaultValue}
        placeholder={component.props.placeHolder} />
      {error}
    </div>
  );
};
