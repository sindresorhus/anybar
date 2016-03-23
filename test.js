import test from 'ava';
import m from './';

test('send', async t => {
	t.notThrows(m('green'));
});

test('custom port', async t => {
	t.notThrows(m('red', {port: 1000}));
});
