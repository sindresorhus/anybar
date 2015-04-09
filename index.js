'use strict';
var dgram = require('dgram');

module.exports = function (status, opts, cb) {
	if (typeof status !== 'string') {
		throw new Error('status required');
	}

	if (typeof opts !== 'object') {
		cb = opts;
		opts = {};
	}

	cb = cb || function () {};

	var port = typeof opts.port === 'number' ? opts.port : 1738;
	var msg = new Buffer(status);
	var client = dgram.createSocket('udp4');

	client.send(msg, 0, msg.length, port, 'localhost', function (err) {
		client.close();

		if (err) {
			cb(err);
			return;
		}

		cb();
	});
};
