module.exports = function(grunt) {
   // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var gtx = require('gruntfile-gtx').wrap(grunt);
  gtx.loadAuto();

  var gruntConfig = require('./grunt');
  gruntConfig.package = require('./package.json');

  gtx.config(gruntConfig);

  gtx.alias('build', ['shell:buildDist', 'less', 'copy']);

  gtx.alias('docs', ['docs-build', 'concurrent:docs']);
  gtx.alias('docs-build', ['shell:docsBuild']);
  gtx.alias('docs-start', ['shell:docsStart']);
  gtx.alias('docs-view', ['shell:docsView']);

  gtx.alias('release-docs', ['build', 'docs-build', 'gh-pages']);
  gtx.alias('release-major', ['release:major', 'release-docs']);
  gtx.alias('release-minor', ['release:minor', 'release-docs']);
  gtx.alias('release-patch', ['release:patch', 'release-docs']);

  gtx.finalise();
};
