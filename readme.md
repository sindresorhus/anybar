# anybar [![Build Status](https://travis-ci.org/sindresorhus/anybar.svg?branch=master)](https://travis-ci.org/sindresorhus/anybar)

> Control the [AnyBar app](https://github.com/tonsky/AnyBar)

[![](https://cloud.githubusercontent.com/assets/170270/24325650/cdde4f9e-11cf-11e7-8e1d-5dee07e3c77d.png)](https://github.com/tonsky/AnyBar)


## Install

```
$ npm install --save anybar
```


## Usage

```js
const anybar = require('anybar');

anybar('purple');
// The Anybar.app menubar icon turned purple
```


## API

### anybar(status, [options])

Returns a promise, but AnyBar.app doesn't send back a reply, so really the only point of waiting for the promise to resolve is in case of an obscure DNS error.

#### status

Type: `string`

[Name](https://github.com/tonsky/AnyBar#usage) of the color dot you want AnyBar.app to display.

#### options

Type: `Object`

##### port

Type: `number`<br>
Default: `1738`

Port to communicate with the AnyBar.app.


## Related

- [anybar-cli](https://github.com/sindresorhus/anybar-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
