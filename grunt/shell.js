module.exports = {
  docsBuild: {
    command: 'cd docs; npm run build; cd -',
  },
  docsStart: {
    command: 'cd docs; npm start; cd -',
  },
  docsView: {
    command: 'open http://localhost:4000',
  }
};
