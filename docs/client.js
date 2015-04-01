'use strict';

var React = require('react');
var App = require('./src/App.jsx');

// For React devtools
window.React = React;

React.render(<App />, document.getElementById('application'));
