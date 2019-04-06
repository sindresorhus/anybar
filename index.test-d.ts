import {expectType, expectError} from 'tsd';
import anybar = require('.');

expectType<Promise<void>>(anybar('red'));
expectType<Promise<void>>(anybar('red', {port: 123}));
expectError(anybar('foo'));
