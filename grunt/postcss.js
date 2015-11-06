'use strict';
module.exports = {
  options: {
    processors: [
      require('autoprefixer')({ browsers: ['last 2 versions'] }),
      require('postcss-calc')(),
      require('postcss-color-function')(),
      require('postcss-custom-properties')(),
      require('postcss-import')(),
      require('postcss-nested')()
    ]
  },
  dist: {
    src: 'src/css/toolkit.css',
    dest: 'dist/toolkit.css'
  }
};
