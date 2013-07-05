var system = require('system'),
	page = require('webpage').create();

var url = system.args[1];


page.open(url, function (status) {

	setTimeout(function() {
 		var data = page.evaluate(function () {
 			var execution = document.querySelector('#qunit-testresult').innerText;
 			execution = execution.substring(0, execution.indexOf('.'));

        	return {
        		total: document.querySelector("#qunit-testresult .total").innerText,
        		passed: document.querySelector("#qunit-testresult .passed").innerText,
        		failed: document.querySelector("#qunit-testresult .failed").innerText,
        		execution: execution
        	};
    	});

		console.log(JSON.stringify(data));

    	phantom.exit();
    }, 5000);
});
