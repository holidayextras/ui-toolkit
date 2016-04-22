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
    tasks: ['less', 'copy:css'],
    options: {
      livereload: true
    }
  }
};
