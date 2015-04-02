module.exports = {
  docs: {
    command: 'cd docs; npm run build; cd -',
  },
  start: {
    command: 'cd docs; npm start; cd -',
  },
  view: {
    command: 'open http://localhost:4000',
  }
};
