'use strict';
var dgram = require('dgram');
var Promise = require('pinkie-promise');
var pify = require('pify');

module.exports = function (status, opts) {
	if (typeof status !== 'string') {
		return Promise.reject(new TypeError('Expected `status` to be a string, got ' + typeof status));
	}

	opts = opts || {};

	var port = typeof opts.port === 'number' ? opts.port : 1738;
	var msg = new Buffer(status);
	var client = dgram.createSocket('udp4');

	return pify(client.send.bind(client))(msg, 0, msg.length, port, 'localhost')
		.then(client.close.bind(client));
};
