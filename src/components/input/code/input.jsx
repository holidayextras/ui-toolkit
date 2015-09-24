var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({

  intent: null,

  propTypes: {
    label: React.PropTypes.string,
    type: React.PropTypes.oneOf(['text', 'email', 'number', 'tel']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    placeHolder: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    readOnly: React.PropTypes.bool,
    required: React.PropTypes.bool,
    validator: React.PropTypes.instanceOf(RegExp),
    errorMessage: React.PropTypes.string,
    children: React.PropTypes.string,
    handleChange: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      value: this.props.children,
      error: null,
      valid: true
    };
  },

  getDefaultProps: function() {
    return {
      type: 'text',
      disabled: false,
      readOnly: false,
      required: false,
      errorMessage: 'Invalid Input',
      id: 'component-input',
      name: 'component-input',
      placeHolder: ''
    };
  },

  validate: function(value) {
    var self = this;
    var isValid = true;
    var error = null;

    if (value !== '' && typeof self.props.validator !== 'undefined') {
      isValid = self.props.validator.test(value);
    }

    if (!isValid) {
      error = self.props.errorMessage;
    }

    self.setState({
      valid: isValid,
      error: error
    });
  },

  handleChange: function(e) {
    var self = this;
    var value = (e.target) ? e.target.value : null;

    self.setState({
      value: value
    });

    clearTimeout(this.intent);
    this.intent = setTimeout(function() {
      self.validate(value);
    }, 500);

    if (self.props.handleChange) {
      self.props.handleChange.apply(this, arguments);
    }

  },

  render: function() {
    var classes = classNames({
      'component-input': true,
      'error': this.state.error || false,
      'disabled': this.props.disabled || false
    });

    var label;

    if (this.props.label){
      label = ( <label className="component-input-label" htmlFor={this.props.id}>{this.props.label}</label > );
    }

    var span;

    if (this.state.error){
      span = ( <span className="component-input-error">{this.state.error}</span> );
    }

    return (
      <div className={classes}>
        {label}
        <input
          className="component-input-field"
          type={this.props.type}
          name={this.props.name}
          value={this.state.value}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          required={this.props.required}
          />
        {span}
      </div>
    );
  }
});
