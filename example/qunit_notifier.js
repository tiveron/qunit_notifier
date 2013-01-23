var qnotifier = require('../lib/main')
	path = require('path');

qnotifier.configure({
	testPath: path.join(__dirname, 'cases'),
	runner: path.join(__dirname, 'index.html'),
	notifier: 'snarl'
});

qnotifier.watch();