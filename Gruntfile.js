module.exports = function(grunt)
{
	var gtx = require('gruntfile-gtx').wrap(grunt);
		gtx.loadAuto();

	var gruntConfig = require('./grunt');
		gruntConfig.package = require('./package.json');

	gtx.config(gruntConfig);

	gtx.alias('live-reload', ['watch']);

	gtx.alias('build:dist', ['clean:dist', 'less:dist', 'copy:dist', 'concat:dist']);
	gtx.alias('build:app_ios', ['build:dist', 'cordovacli:build_ios']);
	gtx.alias('build:app_android', ['build:dist', 'cordovacli:build_ios']);

	gtx.alias('emulate:iphone_4s', ['build:dist', 'cordovacli:emulate_4s', 'shell:webinspector']);
	gtx.alias('emulate:iphone_5', ['build:dist', 'cordovacli:emulate_iphone_5', 'shell:webinspector']);
	gtx.alias('emulate:iphone_5s', ['build:dist', 'cordovacli:emulate_iphone_5s', 'shell:webinspector']);
	gtx.alias('emulate:iphone_6', ['build:dist', 'cordovacli:emulate_iphone_6', 'shell:webinspector']);
	gtx.alias('emulate:iphone_6_plus', ['build:dist', 'cordovacli:emulate_iphone_6_plus', 'shell:webinspector']);
	gtx.alias('emulate:iphone_resizable', ['build:dist', 'cordovacli:emulate_iphone_resizable', 'shell:webinspector']);
	gtx.alias('emulate:ipad_2', ['build:dist', 'cordovacli:emulate_ipad_2', 'shell:webinspector']);
	gtx.alias('emulate:ipad_retina', ['build:dist', 'cordovacli:emulate_ipad_retina', 'shell:webinspector']);
	gtx.alias('emulate:ipad_air', ['build:dist', 'cordovacli:emulate_ipad_air', 'shell:webinspector']);
	gtx.alias('emulate:ipad_resizable', ['build:dist', 'cordovacli:emulate_ipad_resizable', 'shell:webinspector']);

	gtx.alias('prerelease', ['bump-only:prerelease', 'release']);

	gtx.alias('release', ['build:dist', 'bump-commit', 'build:app_ios', 'build:app_android']);
	gtx.alias('release-major', ['bump-only:major', 'release']);
	gtx.alias('release-minor', ['bump-only:minor', 'release']);
	gtx.alias('release-patch', ['bump-only:patch', 'release']);

	gtx.finalise();
};