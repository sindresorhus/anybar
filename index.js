'use strict';
const dgram = require('dgram');
const pify = require('pify');

module.exports = (status, opts) => {
	if (typeof status !== 'string') {
		return Promise.reject(new TypeError(`Expected \`status\` to be string, got ${typeof status}`));
	}

	opts = opts || {};

	const port = typeof opts.port === 'number' ? opts.port : 1738;
	const msg = Buffer.from(status);
	const client = dgram.createSocket('udp4');

	return pify(client.send.bind(client))(msg, 0, msg.length, port, 'localhost')
		.then(() => {
			client.close();
		});
};
