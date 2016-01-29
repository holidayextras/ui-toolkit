'use strict';
module.exports = {
  docs: {
    files: ['docs/src/**/*.js*', 'src/**/*.js*', 'docs/examples/**/*.js*'],
    tasks: ['docs-build'],
    options: {
      livereload: true
    }
  },
  less: {
    files: ['src/**/*.less'],
    tasks: ['less', 'copy:less_css'],
    options: {
      livereload: true
    }
  },
  sass: {
    files: ['src/**/*.scss'],
    tasks: ['sass', 'copy:sass_css'],
    options: {
      livereload: true
    }
  }
};
