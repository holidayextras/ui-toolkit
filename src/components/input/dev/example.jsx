var React = require('react');
var InputComponent = require('../code');

var type = 'email';
var label = 'Email confirmation to';
var placeholder = 'Email Address';

React.render(<InputComponent type={type} label={label} placeholder={placeholder} required />, document.body);