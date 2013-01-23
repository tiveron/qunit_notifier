// dependencies
var snarlapi = require('growler');


/**
 * Growl connector class
 */
var Snarl = function(){
	this.app;
};

/**
 * Register app
 *
 * Register application in Growl notification system
 */
Snarl.prototype.register = function(title){
	this.app = new snarlapi.GrowlApplication(title);

	this.app.setNotifications({
  		'Server Status': {}
	});

	this.app.register();
}

/**
 * Send message
 *
 * Send a message with title, text and icon
 */
Snarl.prototype.send = function(arg){

	console.log(arg.icon);
	this.app.sendNotification('Server Status', {
		title: arg.title,
		text: arg.text,
		icon: arg.icon
	});
}

module.exports = new Snarl();