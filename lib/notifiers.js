// Default configuration
var defaults = {
	allowedArgs: ['system'],
	system: 'growl'
};

var app, api;

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
	 * Send notofication
	 *
	 * Abstract notification system to all available notifiers
	 */
	send: function(arg){
		this.factory();

		app.sendNotification('Server Status', {
			title: "Widgets Unit Tests",
			text: "Arquivo modificado! rodando testes..."
		});
	},

	/**
	 * Notofication Factory
	 *
	 * Factory system to notifications APIs
	 */
	factory: function(){
		if(defaults.system == 'growl'){
			api = require('growler');
			app = new api.GrowlApplication('Widgets Qunit');
		} else if(defaults.system == 'snarl'){
			console.log('not implemented yet');
		} else if(defaults.system == 'libnotify'){
			console.log('not implemented yet');
		} else if(defaults.system == 'snarl'){
			console.log('not implemented yet');
		}
	}
}
