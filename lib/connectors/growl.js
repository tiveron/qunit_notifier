// dependencies
var growler = require('growler');


/**
 * Growl connector class
 */
var Growl = function(){
	this.app;
};

/**
 * Register app
 *
 * Register application in Growl notification system
 */
Growl.prototype.register = function(title){
	this.app = new growler.GrowlApplication(title);

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
Growl.prototype.send = function(arg){
	this.app.sendNotification('Server Status', {
		title: arg.title,
		text: arg.text,
		icon: arg.icon
	});
}

module.exports = new Growl();