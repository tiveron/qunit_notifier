var path = require('path');

/**
 * Module Structure
 */
module.exports = {
	/**
	 * Consolidade data
	 *
	 * Return a consolidated data passed to function
	 */
	consolidate: function(data){

		var consolidated = {};

		// verifies if data came from tests or is just a simple notification
		if(data.total == undefined){
			consolidated.title = data.title;
			consolidated.text = data.text;
			consolidated.icon = consolidated.icon = path.join(__dirname, '..', 'resources', 'icons', 'info.png');
		} else {
			consolidated.title = data.execution;
			consolidated.text = 'Total: ' + data.total + ' Passed: ' + data.passed + ' Failed: ' + data.failed;

			var coefficient = Math.floor((data.passed * 100) /  data.total);

			if(coefficient == 100){
				consolidated.icon = path.join(__dirname, '..', 'resources', 'icons', 'success.png');
			} else {
				consolidated.icon = path.join(__dirname, '..', 'resources', 'icons', 'error.png');
			}
		}

		return consolidated;
	}
}