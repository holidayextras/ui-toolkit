module.exports = {
	docs: {
		files: ['docs/**/*.jsx', 'docs/**/*.js', 'src/**/*.jsx', 'src/**/*.js'],
		tasks: ['docs-build'],
		options: {
			livereload: true
		}
	},
  less: {
    files: ['src/less/**/*.less'],
    tasks: ['less', 'copy:css'],
    options: {
      livereload: true
    }
  }
};
