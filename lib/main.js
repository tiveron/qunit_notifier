// dependencies
var watchr = require('watchr'),
	phantom = require('phantomjs'),
	parser = require('./parser'),
	notifiers = require('./notifiers');


var defaults = {
	allowedArgs: ['testPath', 'runner'],
	testPath: './',
	runner: 'index.html'
};

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

		self.log('Watching dirs...','info');

		watchr.watch({
			path: defaults.testPath,
			listeners: {
				log: function(logLevel){
					self.log('a log message ocurred:', logLevel);
				},
				error: function(err){
					self.log('a new watcher instance finished setting up');
				},
				change: function(changeType, filePath, fileCurrentStat, filePreviousStat){
					self.log('a change event ocurred:');
					self.launch();
				}
			},
			next: function(err, watchers){
				// Watvhing all setup
				self.log('Now watching our paths');
				console.log(watchers);
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
		// todo
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