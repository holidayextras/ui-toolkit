var React = require('react');

module.exports = React.createClass({

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

    if(typeof this.props.validator !== 'undefined'){
      is_valid = this.props.validator.test(e.target.value);
    }

    if( !is_valid){
      this.setState({ error : this.props.errorMessage });
    }

    this.setState({ valid : is_valid });
  },

  render: function() {
    return require('../templates/inputTemplate.jsx')(this);
  }
});
