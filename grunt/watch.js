module.exports = {
  docs: {
      files: ['docs/src/**/*.js*', 'src/**/*.js*'],
      // files: ['docs/**/*.jsx', 'src/**/*.jsx', 'src/**/*.js'],
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
