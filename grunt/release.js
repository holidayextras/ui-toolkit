'use strict'
module.exports = {
  options: {
    bump: false,
    push: true,
    changelog: true,
    commitMessage: 'Built <%= version %>',
    changelogText: '### <%= version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n - <%= grunt.option("changelogtxt") %>\n\n',
    npm: false,
    github: {
      repo: 'holidayextras/ui-toolkit',
      accessTokenVar: 'GITHUB_ACCESS_TOKEN'
    }
  }
}
