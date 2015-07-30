var React = require('react');

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
    readOnly: React.PropTypes.bool,
    required: React.PropTypes.bool,
    validator: React.PropTypes.instanceOf(RegExp),
    errorMessage: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      value: '',
      error: null,
      valid: true
    };
  },

  componentDidMount: function() {
    this.setState({value: this.props.children})
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

    if(value !== '' && typeof self.props.validator !== 'undefined'){
      isValid = self.props.validator.test(value);
    }

    if(!isValid){
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
    this.intent = setTimeout(function(){
      self.validate(value);
    }, 500);
  },

  render: function() {
    return require('../templates/inputTemplate.jsx')(this);
  }
});
