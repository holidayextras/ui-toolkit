'use strict';

var fs = require('fs');
var https = require('https');
var eslint = require('eslint');
var glob = require('glob-all');

var SinceFilter = require('../SinceFilter');
var GitSinceFilter = require('../GitSinceFilter');

var EslintIntegration = module.exports = {};

EslintIntegration.RULESETURL = 'https://raw.githubusercontent.com/holidayextras/culture/a137ad7286a956d114dcea89786160828216bdb8/.eslintrc';
EslintIntegration.ESLINTRC = '.eslintrc';
EslintIntegration.GLOBEXTENSION = '*.?(js|jsx)';

EslintIntegration.label = 'ESLint Report';

EslintIntegration.run = function(options, output, callback) {

  if (!Array.isArray(options.dirs)) return callback(new Error('Directory list must be an array'), output);

  var globDirs = options.dirs.map(EslintIntegration._directoryToGlob);
  var globs = ['./' + EslintIntegration.GLOBEXTENSION].concat(globDirs);

  // If rules are already downloaded, just run with what we have
  if (fs.existsSync(EslintIntegration.ESLINTRC)) {
    return glob(globs, EslintIntegration._processGlobs.bind(EslintIntegration, options, output, function(err) {
      callback(err, output);
    }));
  }

  EslintIntegration._downloadConfig(output, function(error) {
    if (error) return callback(error, output);
    glob(globs, EslintIntegration._processGlobs.bind(EslintIntegration, options, output, function(err) {
      callback(err, output);
    }));
  });
};

EslintIntegration._downloadConfig = function(output, callback) {
  output.write('Downloading ruleset...\n');
  var stream = fs.createWriteStream(EslintIntegration.ESLINTRC);

  stream.on('finish', function() {
    this.close(function() {
      callback();
    });
  });

  var request = https.get(EslintIntegration.RULESETURL, function(response) {
    if (response.statusCode !== 200) {
      return callback(new Error('Problem with rule download'));
    }
    response.pipe(stream);
  });
  request.on('error', function(err) {
    callback(err);
  });

};

EslintIntegration._checkFiles = function(files, output, callback) {
  output.write('Checking linting...\n');
  if (!files.length) {
    output.write('No changes files since provided date. All ok.\n');
    return callback();
  }

  output.write('Files:\n  ' + files.join('\n  ') + '\n');

  var options = {
    configFile: EslintIntegration.ESLINTRC,
    useEslintrc: false
  };

  var engine = new eslint.CLIEngine(options);
  var report = engine.executeOnFiles(files);
  var formatter = engine.getFormatter();
  output.write(formatter(report.results));
  if (report.errorCount) {
    callback(new Error('Failed linting'));
  } else {
    output.write('...Passed\n');
    callback();
  }
};

EslintIntegration._directoryToGlob = function(item) {
  return item + '/**/' + EslintIntegration.GLOBEXTENSION;
};

EslintIntegration._processGlobs = function(options, output, callback, error, files) {
  if (error) return callback(error);
  if (!files || !files.length) return callback(new Error('No files found'));

  if (options.since) {  // Filter files by last modified date
    SinceFilter.process(options.since, files, function(err, recent) {
      if (err) return callback(err);
      EslintIntegration._checkFiles(recent, output, callback);
    });
  } else if (options.gitSince) { // Filter files by git history
    GitSinceFilter.process(options.gitSince, files, function(err, recent) {
      if (err) return callback(err);
      EslintIntegration._checkFiles(recent, output, callback);
    });
  } else {  // No filtering specified
    EslintIntegration._checkFiles(files, output, callback);
  }
};
