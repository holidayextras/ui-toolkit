var React = require('react');

module.exports = function(component) {

  // the form label
  var label;

  if (component.props.label){
    label = ( <label className="input-group-label credit-card-expire-label" htmlFor={component.props.id}>{component.props.label}</label> );
  }

  return (
    <div className="component-credit-card-expire">
      {label}
      <input
        className="credit-card-expire-input"
        type="text"
        id={component.props.id}
        name={component.props.name}
        autoComplete="off"
        maxLength="5"
        minLength="5"
        onChange={component.handleChange}
        value={component.state.expireDate}
        defaultValue={component.props.expireDate}
        placeholder={component.props.placeHolder} />
    </div>
  );
};
