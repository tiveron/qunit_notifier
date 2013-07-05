# Qunit Notifier

Qunit notifier is a notification system for unit tests written with QUnit Library.

## Getting Started

### Requirements

To run Qunit Notifier correctly, you must have installed:

* [nodeJS](http://nodejs.org/)
* [phantomJS](http://phantomjs.org/)
* npm - Comes with node now
* Growl, Snarl or Libnotify to display Qunit Notifier notifications. But it's not obligatory, Qunit Notifier displays messages on terminal too ;)

### Install it globally

* With npm

```bash
$ npm install -g qunit_notifier
```

### Configure

You can pass a configuration file for Qunit Notifier. See more details on documentation.

```javascript
var path = require('path');

var qunit_notifier = {
  	testPath: path.join(__dirname, 'cases'),
    runner: path.join(__dirname, 'index.html'),
    notifier: 'snarl',
    theme: 'doom'
};

module.exports = qunit_notifier;
```

A example can be found in "example" folder.

### Options

You can configure your test runner with some options:

* testPath: Qunit test cases path
* runner: Qunit html runner
* notifier: System notification ("growl","snarl" or "libnotify")
* theme: Yes, we have some themes! :D ("default","batman","doom","ironman","streetfighter")
* silent: Display messages only on terminal (true, false)

... More details on documentation =)

### Custom Themes
In few days... =)

### Run it!
You run Qunit Notifier directly by "qunit_notifier" command! :D

```bash
$ qunit_notifier config_file.js
```

### Screenshots

Default theme

![rest screenshot web service](http://i49.tinypic.com/vwpnxc.png)

Doom theme

![rest screenshot web service](http://i47.tinypic.com/1gjhh2.png)

Batman theme

![rest screenshot web service](http://i45.tinypic.com/2ptsea8.png)