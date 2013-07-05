
//libnotify.notify('5 new emails', { title: 'Thunderbird' })

// dependencies
var libnotify = require('libnotify');


/**
 * Libnotify connector class
 */
var Libnotify = function(){
	this.app;
};

/**
 * Register app
 *
 * Register application in Libnotify notification system
 */
Libnotify.prototype.register = function(title){
	this.app = libnotify;
}

/**
 * Send message
 *
 * Send a message with title, text and icon
 */
Libnotify.prototype.send = function(arg){
	this.app.notify(arg.text, { 
		title: arg.title,
		image: arg.icon
	});
}

module.exports = new Libnotify();