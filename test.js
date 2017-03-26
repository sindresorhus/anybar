import test from 'ava';
import m from '.';

test('send', async t => {
	await t.notThrows(m('green'));
});

test('custom port', async t => {
	await t.notThrows(m('red', {port: 1000}));
});
