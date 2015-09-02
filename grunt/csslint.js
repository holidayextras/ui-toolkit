module.exports = {
  options: {
    csslintrc: '.csslintrc'
  },
  strict: {
    options: {
      import: 2
    },
    src: ['docs/assets/style.css', 'dist/toolkit.css']
  }
};
