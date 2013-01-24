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
			consolidated.icon = this.getTestIcon(data, themePath);
		}

		return consolidated;
	},

	getTestIcon: function(data, themePath){
		var files = fs.readdirSync(themePath),
			coe = Math.floor((data.passed * 100) /  data.total),
			icon = false,
			rounded = 0;

		if(coe == 100){
			rounded = 100;
		} else if(coe >= 75 && coe < 100){
			rounded = 75;
		} else if(coe >= 50 && coe < 75){
			rounded = 50;
		} else if(coe >= 25 && coe < 50){
			rounded = 25;
		}

		for(file in files){
			var name = files[file];
			name = name.substr(0, name.lastIndexOf("."));

			if(name == rounded){
				icon = path.join(themePath, files[file]);
				break;
			}

			if(name == 0){
				failedIcon = path.join(themePath, files[file]);
			}
		}
		return icon ? icon : failedIcon;
	}
}