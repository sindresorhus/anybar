import test from 'ava';
import anybar from '.';

test('send', async t => {
	await t.notThrowsAsync(anybar('green'));
});

test('custom port', async t => {
	await t.notThrowsAsync(anybar('red', {port: 1000}));
});
