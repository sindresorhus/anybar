import {expectType, expectError} from 'tsd';
import anybar from './index.js';

expectType<Promise<void>>(anybar('red'));
expectType<Promise<void>>(anybar('red', {port: 123}));
expectError(anybar('foo'));
