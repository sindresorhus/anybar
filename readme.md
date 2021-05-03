# anybar

> Control the [AnyBar app](https://github.com/tonsky/AnyBar)

[![](https://cloud.githubusercontent.com/assets/170270/24325650/cdde4f9e-11cf-11e7-8e1d-5dee07e3c77d.png)](https://github.com/tonsky/AnyBar)

## Install

```
$ npm install anybar
```

## Usage

```js
import anybar from 'anybar';

anybar('purple');
// The Anybar app menu bar icon turned purple
```

## API

### anybar(status, options?)

Returns a promise, but the AnyBar app doesn't send back a reply, so really the only point of waiting for the promise to resolve is in case of an obscure DNS error.

#### status

Type: `string`

The [name](https://github.com/tonsky/AnyBar#usage) of the color dot you want the AnyBar app to display.

#### options

Type: `Object`

##### port

Type: `number`\
Default: `1738`

The port to communicate with the AnyBar app.

## Related

- [anybar-cli](https://github.com/sindresorhus/anybar-cli) - CLI for this module
