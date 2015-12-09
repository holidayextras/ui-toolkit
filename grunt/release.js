'use strict';
module.exports = {
  options: {
    bump: false,
    changelog: true,
    commitMessage: 'Built <%= version %>',
    changelogText: '### <%= version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n - <%= grunt.option("changelogtxt") %>\n\n',
    npm: false
  }
};
