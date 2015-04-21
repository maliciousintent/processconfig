# processconfig
Wrapper for process.config which trows if a variable is not set or empty.

[![Build Status](https://travis-ci.org/plasticpanda/processconfig.svg?branch=master)](https://travis-ci.org/plasticpanda/processconfig) 
[![Dependencies](https://david-dm.org/plasticpanda/processconfig.svg)](https://david-dm.org/plasticpanda/processconfig) 
[![devDependency Status](https://david-dm.org/plasticpanda/processconfig/dev-status.svg)](https://david-dm.org/plasticpanda/processconfig#info=devDependencies)  
[![NPM](https://nodei.co/npm/processconfig.png)](https://nodei.co/npm/processconfig/)


## Usage

```node
var config = require('processconfig');

config.read({
  // e.g.: read config from a json / yaml file or from process.env...
  foo: 'bar1',
  home: '/home/pino',
  illegal: '',
});

console.log(config('foo')); // > bar1
console.log(config('foooo')); // > throws because foooo is not set
console.log(config('illegal')); // > throws because illegal is empty
```


## Tests

Run ```npm test```.


## License

See ```LICENSE``` file.

