var qnotifier = require('../lib/main');
	var path = require('path');

qnotifier.configure({
	testPath: path.join(__dirname, 'cases'),
	runner: path.join(__dirname, 'index.html'),
	notifier: 'libnotify',
	theme: 'doom'
	//silent: true
});

qnotifier.watch();