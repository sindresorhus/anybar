#!/usr/bin/env node
'use strict';
var meow = require('meow');
var anybar = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ anybar <status>',
		'',
		'Example',
		'  $ anybar purple',
		'',
		'Options',
		'  --port, -p    AnyBar.app port. Default: 1738'
	].join('\n')
}, {
	string: ['_'],
	alias: {
		p: 'port'
	}
});

if (!cli.input[0]) {
	console.error('status required');
	process.exit(1);
}

anybar(cli.input[0], cli.flags, function (err) {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	process.exit(0);
});
