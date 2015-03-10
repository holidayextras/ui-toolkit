module.exports = {
	less: {
		files: ['src/less/*.less', 'src/less/**/*.less'],
		tasks: ['build:dist'],
		options: {
			livereload: false,
			spawn: false
		}
	},
	js: {
		files: ['src/js/**/*.js', 'src/js/*.js'],
		tasks: ['build:dist'],
		options: {
			livereload: false,
			spawn: false
		}
	},
	www: {
		files: ['www/**/*.*'],
		tasks: [], // @TODO: Run Custom Task on Rebuild
		options: {
			livereload: true,
			spawn: false
		}
	}
};