'use strict';

var assert = require('assert');

require('../');

assert.ok(global.document, 'expected document to be available');
assert.ok(global.window, 'expected window to be available');
assert.ok(global.navigator, 'expected navigator to be available');
assert.ok(global.Intl, 'expected Intl to be available');
