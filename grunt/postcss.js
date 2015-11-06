'use strict';
module.exports = {
  options: {
    processors: [
      require('postcss-import')(),
      require('autoprefixer')({ browsers: ['last 2 versions'] }),
      require('postcss-calc')(),
      require('postcss-custom-properties')(),
      require('postcss-color-function')(),
      require('postcss-nested')()
    ]
  },
  dist: {
    src: 'src/css/toolkit.css',
    dest: 'dist/toolkit.css'
  }
};
