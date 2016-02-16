#!/usr/bin/env node

'use strict';

var MakeUp = require('../index');

var argv = require('minimist')(process.argv.slice(2));

var options = {
  dirs: argv._,
  since: argv.s,
  gitSince: argv.g
};
MakeUp.check(options, function(err, result) {
  console.log(result);
  if (err) {
    console.log('ERROR: ' + err.message);
    process.exit(1); // eslint-disable-line no-process-exit
  }
});
