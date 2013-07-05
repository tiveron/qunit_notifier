var qnotifier = require('qunit_notifier'),
	path = require('path');

module.exports = {
	run: function (cwd, args) {		
		var config = false;

		if(args[2]){
			try{
				config = require(path.join(cwd, args[2]));
			} catch(e){
				console.log("Cannot find module " + args[2] + " ... sorry =(");
				process.exit(1);
			}
		}

		if(config){
			qnotifier.configure(config);
		}

		qnotifier.watch();
	}
};