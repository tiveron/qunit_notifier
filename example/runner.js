var path = require('path');

var qunit_notifier = {
    testPath: path.join(__dirname, 'cases')
    ,runner: path.join(__dirname, 'index.html')
    ,notifier: 'libnotify'
    ,theme: 'doom'
    //,silent: true
    //,watch: false
};

module.exports = qunit_notifier;
