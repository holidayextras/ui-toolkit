'use strict';

var fs = require('fs');
var path = require('path');
var nodejsx = require('node-jsx').install({ extension: '.jsx' });
var App = require('./src/App');

App.getPages().forEach(function (fileName) {
	var RootHTML = App.renderToString({ initialPath: fileName });
	fs.writeFileSync(path.join(__dirname, fileName), RootHTML);
});
