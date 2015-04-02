module.exports = function(grunt) {
	var gtx = require('gruntfile-gtx').wrap(grunt);
		gtx.loadAuto();

	var gruntConfig = require('./grunt');
		gruntConfig.package = require('./package.json');

	gtx.config(gruntConfig);

	gtx.alias('docs', ['concurrent:docs']);
	gtx.alias('docs-build', ['shell:docsBuild']);
	gtx.alias('docs-start', ['shell:docsStart']);
	gtx.alias('docs-view', ['shell:docsView']);

	gtx.alias('release', ['build', 'buildcontrol']);
	gtx.alias('release-major', ['bump-only:major', 'release']);
	gtx.alias('release-minor', ['bump-only:minor', 'release']);
	gtx.alias('release-patch', ['bump-only:patch', 'release']);

	gtx.finalise();
};
