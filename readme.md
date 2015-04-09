# anybar [![Build Status](https://travis-ci.org/sindresorhus/anybar.svg?branch=master)](https://travis-ci.org/sindresorhus/anybar)

> Node.js client for the [AnyBar app](https://github.com/tonsky/AnyBar)

[![](https://github.com/tonsky/AnyBar/blob/master/AnyBar/Resources/screenshot.png)](https://github.com/tonsky/AnyBar)


## Install

```
$ npm install --save anybar
```


## Usage

```js
var anybar = require('anybar');

anybar('purple');
//=> the Anybar.app icon turned purple
```


## API

### anybar(status, [options], [callback])

#### status

*Required*  
Type: `string`

[Name](https://github.com/tonsky/AnyBar#usage) of the color dot you want AnyBar.app to display.

#### options.port

Type: `number`  
Default: `1738`

The port to communicate with the AnyBar.app.

#### callback

Type: `function`

You probably don't care about this as AnyBar.app doesn't acknowledge a received message, so the only thing you'll catch here is obscure 	system level UDP errors.


## CLI

```
$ npm install --global anybar
```

```
$ anybar --help

  Usage
    $ anybar <status>

  Example
    $ anybar purple

  Options
    --port, -p    AnyBar.app port. Default: 1738
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
