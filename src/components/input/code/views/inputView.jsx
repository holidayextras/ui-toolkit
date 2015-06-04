var React = require('react');

module.exports = React.createClass({

  intent: null,

  propTypes: {
    label: React.PropTypes.string,
    type: React.PropTypes.oneOf(['text', 'password', 'email']),
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    error: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    required: React.PropTypes.bool,
    valid: React.PropTypes.bool,
    validator: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      value: this.props.defaultValue || '',
      error: null,
      valid: true
    }
  },

  getDefaultProps: function() {
    return {
      type: 'text',
      disabled: false,
      readOnly: false,
      required: false,
      onChange: this.changeHandler,
      errorMessage: null
    }
  },

  changeHandler: function(e) {

    var is_valid = true;
    var error = null;
    var self = this;
    var value = e.target.value

    clearTimeout(this.intent);
    this.intent = setTimeout(function(){
      if(value !== '' && typeof self.props.validator !== 'undefined'){
        is_valid = self.props.validator.test(value);
      }

      if( !is_valid){
        error = self.props.errorMessage;
      }

      self.setState({
        valid: is_valid,
        error: error
      });
    }, 500);
  },

  render: function() {
    return require('../templates/inputTemplate.jsx')(this);
  }
});
