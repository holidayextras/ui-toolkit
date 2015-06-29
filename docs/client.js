'use strict';

var React = require('react');

// For React devtools ( adding before App require otherwise there are issues with devtools not working )
window.React = React;

var App = require('./src/App.jsx');

React.render(<App />, document.getElementById('application'));
