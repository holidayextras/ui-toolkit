'use strict';

var React = require('react');
var ReactIntl = require('react-intl');
var ReactDOM = require('react-dom');
var App = require('./src/App.jsx');

// For React devtools
window.React = React;

// For Rendering
window.ReactDOM = ReactDOM;

ReactDOM.render(<App />, document.getElementById('application'));
