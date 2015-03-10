module.exports = {
	options: {
		path: './',
		cli: 'cordova'
	},
	cordova: {
		options: {
			command: ['build', 'emulate'],
			platforms: ['ios','android'],
			path: './',
			id: 'com.blackdove.blackdove',
			name: 'blackdove'
		}
	},
	build_ios: {
		options: {
			command: 'build',
			platforms: ['ios']
		}
	},
	build_android: {
		options: {
			command: 'build',
			platforms: ['android']
		}
	},
	emulate_iphone_4s: {
		options: {
			command: 'emulate',
			platforms: ['ios'],
			args: ['--target', 'iPhone-4s']
		}
	},
	emulate_iphone_5: {
		options: {
			command: 'emulate',
			platforms: ['ios'],
			args: ['--target', 'iPhone-5']
		}
	},
	emulate_iphone_5s: {
		options: {
			command: 'emulate',
			platforms: ['ios'],
			args: ['--target', 'iPhone-5s']
		}
	},
	emulate_iphone_6: {
		options: {
			command: 'emulate',
			platforms: ['ios'],
			args: ['--target', 'iPhone-6']
		}
	},
	emulate_iphone_6_plus: {
		options: {
			command: 'emulate',
			platforms: ['ios'],
			args: ['--target', 'iPhone-6-Plus']
		}
	},
	emulate_iphone_resizable: {
		options: {
			command: 'emulate',
			platforms: ['ios'],
			args: ['--target', 'Resizable-iPhone']
		}
	},
	emulate_ipad_2: {
		options: {
			command: 'emulate',
			platforms: ['ios'],
			args: ['--target', 'iPad-2']
		}
	},
	emulate_ipad_retina: {
		options: {
			command: 'emulate',
			platforms: ['ios'],
			args: ['--target', 'iPad-Retina']
		}
	},
	emulate_ipad_air: {
		options: {
			command: 'emulate',
			platforms: ['ios'],
			args: ['--target', 'iPad-Air']
		}
	},
	emulate_ipad_resizable: {
		options: {
			command: 'emulate',
			platforms: ['ios'],
			args: ['--target', 'Resizable-iPad']
		}
	},
	emulate_android: {
		options: {
			command: 'emulate',
			platforms: ['android'],
			args: ['--target','Nexus5']
		}
	}
};