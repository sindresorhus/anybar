declare namespace anybar {
	type AnybarStatus =
		| 'white'
		| 'red'
		| 'orange'
		| 'yellow'
		| 'green'
		| 'cyan'
		| 'blue'
		| 'purple'
		| 'black'
		| 'question'
		| 'exclamation'
		| 'quit';

	interface Options {
		/**
		Port to communicate with the AnyBar.app.

		@default 1738
		*/
		port?: number;
	}
}

/**
Control the [AnyBar app](https://github.com/tonsky/AnyBar).

@param status - [Name](https://github.com/tonsky/AnyBar#usage) of the color dot you want AnyBar.app to display.
@returns Returns a promise, but AnyBar.app doesn't send back a reply, so really the only point of waiting for the promise to resolve is in case of an obscure DNS error.

@example
```
import anybar = require('anybar');

anybar('purple');
// The Anybar.app menubar icon turned purple
```
*/
declare function anybar(
	status: anybar.AnybarStatus,
	options?: anybar.Options
): Promise<void>;

export = anybar;
