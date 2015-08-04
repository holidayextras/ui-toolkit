var React = require('react');
var _ = require('lodash');

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

    if(!_.isEmpty(value) && !_.isUndefined(self.props.validator)) {
      isValid = self.props.validator.test(value);
      console.log('isValid', isValid);
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

    if(self.props.handleChange) {
      self.props.handleChange.apply(this, arguments);
    }

  },

  render: function() {
    return require('../templates/inputTemplate.jsx')(this);
  }
});
