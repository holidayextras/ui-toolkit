var React = require('react');

module.exports = React.createClass({

  intent: null,

  propTypes: {
    label: React.PropTypes.string,
    type: React.PropTypes.oneOf(['text', 'password', 'email']),
    placeHolder: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    error: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    required: React.PropTypes.bool,
    valid: React.PropTypes.bool,
    validator: React.PropTypes.any,
    errorMessage: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.defaultValue || '',
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
      placeHolder: '',
      defaultValue: ''
    };
  },

  handleChange: function(e) {

    var isValid = true;
    var error = null;
    var self = this;
    var value = (e.target) ? e.target.value : null;

    if(value !== '' && typeof self.props.validator !== 'undefined'){
      isValid = self.props.validator.test(value);
    }

    if( !isValid){
      error = self.props.errorMessage;
    }

    clearTimeout(this.intent);
    this.intent = setTimeout(function(){
      self.setState({
        valid: isValid,
        error: error
      });
    }, 500);

    // @note: adding this because there is a timeout on state change
    // not picked up my unit tests.  But this reflects the values that
    // will be set after timeout executes.
    this.setState({
      unitTestValid: isValid,
      unitTestError: error
    });
  },

  render: function() {
    return require('../templates/inputTemplate.jsx')(this);
  }
});
