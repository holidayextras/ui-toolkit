#!/usr/bin/env node

'use strict';

var CLIEngine = require('eslint').CLIEngine;

if (!process.argv[2]) {
  console.log('Usage: ' + process.argv[1] + ' <config file>');
  process.exit(1);  // eslint-disable-line no-process-exit
}

var cli = new CLIEngine({
  configFile: process.argv[2],
  useEslintrc: false
});

console.log(JSON.stringify(cli.getConfigForFile('index.js'), null, 2));
