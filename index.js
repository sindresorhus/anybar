import {promisify} from 'util';
import dgram from 'dgram';

export default async function anybar(status, {port = 1738} = {}) {
	if (typeof status !== 'string') {
		return Promise.reject(new TypeError(`Expected \`status\` to be string, got ${typeof status}`));
	}

	const message = Buffer.from(status);
	const client = dgram.createSocket('udp4');

	await promisify(client.send.bind(client))(message, 0, message.length, port, 'localhost');
	client.close();
}
