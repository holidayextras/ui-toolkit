'use strict';
require('es6-promise').polyfill(); // can be removed when we no longer support node v0.10
module.exports = {
  options: {
    processors: [
      require('postcss-import')(),
      require('postcss-nested')(),
      require('postcss-custom-properties')(),
      require('postcss-color-function')(),
      require('cssnano')({
        autoprefixer: { browsers: ['last 2 versions'] },
        discardComments: { removeAll: true }
      })
    ]
  },
  dist: {
    src: 'src/css/toolkit.css',
    dest: 'dist/toolkit.css'
  }
};
