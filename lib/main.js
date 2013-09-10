// dependencies
var watchr = require('watchr'),
	spawn = require('child_process').spawn,
	parser = require('./parser'),
	notifiers = require('./notifiers'),
	path = require('path')
	fs = require('fs'),
	util = require('util');

// Default configuration
var defaults = {
	allowedArgs: ['testPath', 'runner', 'notifier', 'applicationName','theme', 'silent'],
	testPath: path.join(process.cwd(), 'cases'),
	runner: path.join(process.cwd(), 'index.html'),
	applicationName: 'Qunit Notifier',
	notifier: 'snarl',
	theme: 'default',
	silent: false
};

// clear console
function clear(){
	//util.print("\u001b[2J\u001b[0;0H");
}


/**
 * Module Structure
 */
module.exports = {
	/**
	 * Module Settings
	 *
	 * Expects an object an extends module settings by allowed arguments
	 */
	configure: function(settings){
		for(var key in settings){
			for(var prop in defaults.allowedArgs){
				if(defaults.allowedArgs[prop] == key){
					defaults[key] = settings[key];
				}
			}
		}
	},

	/**
	 * Watcher
	 *
	 * Watch tests directory, waiting for file updates
	 */
	watch: function(){
		var self = this;

		clear();
		self.log('Watching test files...','info');
		self.notify(parser.consolidate({
			title: 'Qunit Tests',
			text: 'Watching test files...',
			theme: defaults.theme
		}));

		watchr.watch({
			path: defaults.testPath,
			listeners: {
				log: function(logLevel){
					//self.log('a log message ocurred:', logLevel);
				},
				error: function(err){
					self.log('a new watcher instance finished setting up');
				},
				change: function(changeType, filePath, fileCurrentStat, filePreviousStat){
					if(changeType === 'update'){
						clear();
						self.log('A test file was updated!');
						self.log('Running unit tests...');

						self.notify(parser.consolidate({
							title: 'A test file was updated!',
							text: 'Running unit tests...',
							theme: defaults.theme
						}));

						self.launch();
					}
				}
			},
			next: function(err, watchers){
				// Watvhing all setup
				//self.log('Now watching files');
				// Close after 10 seconds
				setTimeout(function(){
					self.log('Stop watching our paths');
					for(var i = 0; i < watchers.length; i++){
						watchers[i].close();
					}
				}, 10*1000);
			}
		});

	},

	/**
	 * Launcher
	 *
	 * Launches tests in a PhantomJS instance
	 */
	launch: function(){
		var self = this;
		var runner = defaults.runner;
		runner = 'file:///' + defaults.runner.replace(/\\/g, '/'); // TO DO: Multiplo protocols http:// file:/// etc

		var server = path.join(__dirname,'phantom_server.js');

		var phantom = spawn('phantomjs', [server, runner]);

		phantom.stdout.on('data', function(data) {
    		var data = JSON.parse(data);
    		data.theme = defaults.theme;
    		self.notify(parser.consolidate(data));
		});

		phantom.stderr.on('data', function (data) {
			console.log('Sorry, a problem occurred. Maybe PhantomJS is not in your path =(');
		});

	},

	/**
	 * Notification System
	 *
	 * Sends notification for one of targeted systems: Snarl, Growl, Libnotify, html5 | mac os notification == html5
	 */
	notify: function(data){

		if(!defaults.silent){
			notifiers.configure({
				system: defaults.notifier,
				applicationName: defaults.applicationName
			});

			notifiers.send(data);
		}
	},

	/**
	 * Log System
	 *
	 * Log messages by type and priority
	 */
	log: function(message, type){
		console.log(message);
	}
}