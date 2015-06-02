module.exports = {
  buildDist: {
    command: "./node_modules/.bin/browserify -g [ ./node_modules/reactify --extension '.jsx' ] ./index.js --standalone ui-toolkit > ./dist/ui-toolkit.standalone.js"
  },
  docsBuild: {
    command: 'cd docs; npm run build && cd -'
  },
  docsStart: {
    command: 'cd docs; npm run start && cd -'
  },
  docsView: {
    command: 'open http://localhost:4000'
  }
};
