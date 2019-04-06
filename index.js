'use strict';
const {promisify} = require('util');
const dgram = require('dgram');

module.exports = async (status, opts = {}) => {
	if (typeof status !== 'string') {
		return Promise.reject(new TypeError(`Expected \`status\` to be string, got ${typeof status}`));
	}

	const port = typeof opts.port === 'number' ? opts.port : 1738;
	const message = Buffer.from(status);
	const client = dgram.createSocket('udp4');

	await promisify(client.send.bind(client))(message, 0, message.length, port, 'localhost');
	client.close();
};
