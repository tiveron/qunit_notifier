# Qunit Notifier

Qunit notifier is a notification system for unit tests written with QUnit Library.

## Getting Started

### Requirements

To run Qunit Notifier correctly, you must have installed:

* [nodeJS](http://nodejs.org/)
* [phantomJS](http://phantomjs.org/)
* npm - Comes with node now
* Growl, Snarl or Libnotify to display Qunit Notifier notifications

### Install

* With npm
	$ npm install qunit_notifier

### Configure

```javascript
var qnotifier = require('qunit_notifier');
	var path = require('path');

qnotifier.configure({
	testPath: path.join(__dirname, 'cases'),
	runner: path.join(__dirname, 'index.html'),
	notifier: 'growl'
});

qnotifier.watch();
```

A example can be found in "example" folder.

### Options

You can configure your test runner with some options:

* testPath: Qunit test cases path
* runner: Qunit html runner
* notifier: System notification ("growl","snarl" or "libnotify")
* theme: Yes, we have some themes! :D ("default","batman","doom","ironman","streetfighter")

### Custom Themes
	In few days... =)