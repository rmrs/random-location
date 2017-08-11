# random-location

[`random-location`](https://www.npmjs.com/package/random-location) gets you
random coordinates within a circle given a center point and radius. It works
anywhere JavaScript runs.

[![travis build](https://img.shields.io/travis/rmrs/random-location.svg?style=flat-square)](https://travis-ci.org/rmrs/random-location)
[![codecov coverage](https://img.shields.io/codecov/c/github/rmrs/random-location.svg?style=flat-square)](https://codecov.io/github/rmrs/random-location)
[![version](https://img.shields.io/npm/v/random-location.svg?style=flat-square)](http://npm.im/random-location)
[![MIT License](https://img.shields.io/npm/l/random-location.svg?style=flat-square)](http://opensource.org/licenses/MIT)

![](https://github.com/rmrs/random-location/raw/master/examples/web/example.png)

## Installation

Using [npm](https://www.npmjs.com/):
~~~
$ npm install --save random-location
~~~

Then with a module bundler like [webpack](https://webpack.github.io/), use as
you would anything else:

```js
// Using ES6 modules
import randomLocation from 'random-location'

// Using CommonJS modules
var randomLocation = require('random-location')
```

The UMD build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/random-location/dist/randomLocation.umd.min.js"></script>
```
