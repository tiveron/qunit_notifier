var path = require('path');

var qunit_notifier = {
    testPath: path.join(__dirname, 'cases'),
    runner: path.join(__dirname, 'index.html'),
    notifier: 'snarl',
    theme: 'doom'
    ,silent: true
};

module.exports = qunit_notifier;
