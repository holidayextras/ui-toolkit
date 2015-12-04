'use strict';
module.exports = {
  buildDist: {
    command: "./node_modules/.bin/browserify -g [ ./node_modules/reactify --extension '.jsx' ] ./index.js --standalone ui-toolkit > ./dist/ui-toolkit.standalone.js"
  }
};
