'use strict';

global.document = require('jsdom').jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;
global.navigator = window.navigator;

require('intl');
