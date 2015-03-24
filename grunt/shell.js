module.exports = {
  docs: {
    command: 'node docs/build.js',
  },
  start: {
    command: 'cd docs; npm start; cd -',
  },
  view: {
    command: 'open http://localhost:4000',
  }
};
