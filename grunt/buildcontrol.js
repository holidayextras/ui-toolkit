module.exports = {
	options: {
		dir: 'docs',
		commit: true,
		push: true,
		tag: true,
		message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
	},
	pages: {
		options: {
			remote: 'git@github.com/holidayextras/ui-toolkit',
			branch: 'gh-pages'
		}
	}
};
