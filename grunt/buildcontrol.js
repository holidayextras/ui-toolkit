module.exports = {
	options: {
		dir: 'docs',
		commit: false,
		push: false,
		tag: false,
		message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
	},
	pages: {
		options: {
			remote: 'git@github.com/holidayextras/ui-toolkit',
			branch: 'gh-pages'
		}
	}
};
