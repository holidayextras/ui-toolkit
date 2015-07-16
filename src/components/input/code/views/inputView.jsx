var React = require('react');

module.exports = React.createClass({

  intent: null,

  propTypes: {
    label: React.PropTypes.string,
    type: React.PropTypes.oneOf(['text', 'email', 'number', 'tel']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
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

    console.log(value);
    console.log(typeof value);
    // console.log(self.props.validator);


    if(value !== '' && typeof self.props.validator !== 'undefined'){
      console.log('start');
      console.log(RegExp(self.props.validator).test(value))
      isValid = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i).test('cameron.viner@gmail.com')
      console.log(isValid);
      console.log('end');
    }

    if( !isValid){
      error = self.props.errorMessage;
      console.log("banana");
    }

    clearTimeout(this.intent);
    this.intent = setTimeout(function(){
      self.setState({
        valid: isValid,
        error: error
      });
    }, 500);
  },

  render: function() {
    return require('../templates/inputTemplate.jsx')(this);
  }
});
