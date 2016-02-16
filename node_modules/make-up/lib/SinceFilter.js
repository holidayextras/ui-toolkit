'use strict';

var fs = require('fs');

var SinceFilter = module.exports = {};

SinceFilter.process = function(since, files, callback) {
  var sinceSeconds = new Date(since).getTime();
  var recentFiles = files.filter(this._fileIsNewer.bind(undefined, sinceSeconds));
  callback(null, recentFiles);
};

SinceFilter._fileIsNewer = function(since, file) {
  var stat = fs.statSync(file);
  var seconds = new Date(stat.mtime).getTime();
  return seconds > since;
};
