module.exports = {
	options: {
		stripBanners: false,
		banner: '/*!\n' +
		' * <%= package.author.name %>: <%= package.description %>\n' +
		' * @author <%= package.author.email %>\n' +
		' * @version <%= package.version %>\n' +
		' * @link <%= package.author.url %>\n' +
		' * @builddate <%= grunt.template.today("yyyy/mm/dd") %>\n' +
		' */\n\n',
		process: function(src, filepath) {
			return '// Source: ' + filepath + '\n' +
				src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
		},
	},
	dist: {
		files: {
			'www/js/app.js': [
				"src/js/*.js"
			]
		}
	}
};