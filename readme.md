# anybar [![Build Status](https://travis-ci.org/sindresorhus/anybar.svg?branch=master)](https://travis-ci.org/sindresorhus/anybar)

> Control the [AnyBar app](https://github.com/tonsky/AnyBar)

[![](https://github.com/tonsky/AnyBar/blob/master/AnyBar/Resources/screenshot.png)](https://github.com/tonsky/AnyBar)


## Install

```
$ npm install --save anybar
```


## Usage

```js
const anybar = require('anybar');

anybar('purple');
//=> the Anybar.app menubar icon turned purple
```


## API

### anybar(status, [options])

Returns a promise, but AnyBar.app doesn't send back a reply, so really the only point of waiting for the promise to resolve is in case of an obscure DNS error.

#### status

Type: `string`

[Name](https://github.com/tonsky/AnyBar#usage) of the color dot you want AnyBar.app to display.

#### options

##### port

Type: `number`<br>
Default: `1738`

Port to communicate with the AnyBar.app.


## Related

- [anybar-cli](https://github.com/sindresorhus/anybar-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
