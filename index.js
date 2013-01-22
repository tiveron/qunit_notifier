var qnotifier = require('./lib/main')
	path = require('path');

qnotifier.settings({
	testPath: path.join(__dirname, 'example_tests', 'cases'),
	runner: path.join(__dirname, 'example_tests', 'index.html')
});