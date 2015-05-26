var React = require('react');

module.exports = function(component) {
  return (
    <div className="ui-component-credit-card-expire">
        <input
          className="credit-card-expire-input"
          type="text"
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
