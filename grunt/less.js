module.exports = {
  all: {
    options: {
      compress: true
    },
    files: {
      'dist/toolkit.min.css': 'src/less/toolkit.less'
    }
  },
  lint: {
    files: {
      'dist/toolkit.css': 'src/less/toolkit.less'
    }
  }
};
