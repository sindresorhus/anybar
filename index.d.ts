export type AnybarStatus =
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

export interface Options {
	/**
	The port to communicate with the AnyBar app.

	@default 1738
	*/
	readonly port?: number;
}

/**
Control the [AnyBar app](https://github.com/tonsky/AnyBar).

@param status - The [name](https://github.com/tonsky/AnyBar#usage) of the color dot you want the AnyBar app to display.
@returns Returns a promise, but the AnyBar app doesn't send back a reply, so really the only point of waiting for the promise to resolve is in case of an obscure DNS error.

@example
```
import anybar from 'anybar';

anybar('purple');
// The Anybar app menu bar icon turned purple
```
*/
export default function anybar(status: AnybarStatus, options?: Options): Promise<void>;
