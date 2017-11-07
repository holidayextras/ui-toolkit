'use strict'

var version = require('../package.json').version

module.exports = {
  options: {
    bucket: 'open-source.holidayextras.com',
    region: 'eu-west-1',
    access: 'public-read',
    uploadConcurrency: 3
  },
  default: {
    files: [
      { expand: true, cwd: 'dist', src: ['ui-toolkit.standalone.js'], dest: 'ui-toolkit/' + version, params: { ContentType: 'application/json' } },
      { expand: true, cwd: 'dist', src: ['*.css'], dest: 'ui-toolkit/' + version, params: { ContentType: 'text/css' } }
    ]
  }
}
