module.exports = function(grunt) {
	var gtx = require('gruntfile-gtx').wrap(grunt);
		gtx.loadAuto();

	var gruntConfig = require('./grunt');
		gruntConfig.package = require('./package.json');

	gtx.config(gruntConfig);

	gtx.alias('build', ['shell:docs']);
	gtx.alias('docs-start', ['shell:start']);
	gtx.alias('docs-view', ['shell:view']);

	gtx.alias('release', ['build', 'buildcontrol']);
	gtx.alias('release-major', ['bump-only:major', 'release']);
	gtx.alias('release-minor', ['bump-only:minor', 'release']);
	gtx.alias('release-patch', ['bump-only:patch', 'release']);

	gtx.finalise();
};
