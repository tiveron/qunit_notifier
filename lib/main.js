// dependencies
var watchr = require('watchr'),
	phantom = require('phantomjs');

// qunit notifier settings
var settings = {
	__allowedArgs: ['testPath', 'runner'],
	testPath: './',
	runner: 'index.html'
};

// settings setter
function setSettings(args){
	for(var key in args){
		for(var prop in settings.__allowedArgs){
			if(settings.__allowedArgs[prop] == key){
				settings[key] = args[key];
			}
		}
	}

	console.log(settings);
}

function qunit_notifier(){
	return [];
}

module.exports = qunit_notifier;
module.exports.settings = setSettings;