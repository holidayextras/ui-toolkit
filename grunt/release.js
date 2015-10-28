'use strict';
module.exports = {
  options: {
    changelog: true,
    commitMessage: 'Built <%= version %>',
    changelogText: '### <%= version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n - <%= grunt.option("changelogtxt") %>\n',
    npm: false
  }
};
