#!/usr/bin/env node
'use strict';

var report = require('../lib/report');

var targetDir = process.env.REPO_DIR || '.';
report(targetDir, function(err, output) {
  if (err) {
    console.log(err);
    process.exit(1); // eslint-disable-line no-process-exit
  }
  console.log(output.text);
});
