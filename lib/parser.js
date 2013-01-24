var path = require('path'),
	fs = require('fs');

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

		var consolidated = {},
			themePath = path.join(__dirname, '..', 'resources', 'themes', data.theme);

		// verifies if data came from tests or is just a simple notification
		if(data.total == undefined){
			consolidated.title = data.title;
			consolidated.text = data.text;
			consolidated.icon = consolidated.icon = path.join(themePath, 'info.png');
		} else {
			consolidated.title = data.execution;
			consolidated.text = 'Total: ' + data.total + ' Passed: ' + data.passed + ' Failed: ' + data.failed;

			if(data.failed > 0){
				consolidated.icon = path.join(themePath, "0.png");
			} else {
				consolidated.icon = path.join(themePath, "100.png");
			}

			//var coefficient = Math.floor((data.passed * 100) /  data.total);
			//consolidated.icon = path.join(themePath, this.getTestIcon(coefficient, themePath));
		}

		return consolidated;
	},

	getTestIcon: function(coefficient, themePath){
	}
}