// Common test utilities.
global.assert = require('chai').assert;
global.sinon = require('sinon');
global.React = require('react/addons');
global.TestUtils = React.addons.TestUtils;

// Virtual DOM bootstrap.
global.jsdom = require('jsdom');
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;
global.navigator = window.navigator;
