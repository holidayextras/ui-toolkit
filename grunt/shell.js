module.exports = {
	docs:
	{
		command: 'node docs/build.js',
		stdout: false
	},
	start:
	{
		command: 'cd docs; npm start; cd -',
		stdout: false
	},
	view:
	{
		command: 'open http://localhost:4000',
		stdout: false
	}
};