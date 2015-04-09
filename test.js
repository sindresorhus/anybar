'use strict';
var test = require('ava');
var anybar = require('./');

test('send', function (t) {
	t.plan(1);

	anybar('green', function (err) {
		t.assert(!err, err);
	});
});

test('custom port', function (t) {
	t.plan(1);

	anybar('red', {port: 1000}, function (err) {
		t.assert(!err, err);
	});
});

test('callback optional', function (t) {
	anybar('blue');
});
