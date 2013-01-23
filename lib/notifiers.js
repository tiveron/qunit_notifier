// Default configuration
var defaults = {
	allowedArgs: ['system','applicationName'],
	system: 'growl',
	applicationName: 'Qunit Notifier'
};

// notifier object
var notifier = false;

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
	
		this.factory();
	},

	/**
	 * Send notofication
	 *
	 * Abstract notification system to all available notifiers
	 */
	send: function(arg){
		
		if(notifier === false){
			notifier = this.factory();
		}

		notifier.send(arg);
	},

	/**
	 * Notofication Factory
	 *
	 * Factory system to notifications APIs
	 */
	factory: function(){
		
		if(defaults.system == 'growl'){
			console.log('Growl foi escolhido');
			notifier = require('./connectors/growl');
			notifier.register(defaults.applicationName);
		} else if(defaults.system == 'snarl'){
			notifier = require('./connectors/snarl');
		} else if(defaults.system == 'libnotify'){
			notifier = require('./connectors/libnotify');
		} else if(defaults.system == 'html5'){
			notifier = require('./connectors/html5');
		}
	}
}
