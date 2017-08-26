# random-location

[`random-location`](https://www.npmjs.com/package/random-location) gets you
random coordinates within a circle (or on a circumference) given a center point and radius.
We use it to stress test our [geohash](https://en.wikipedia.org/wiki/Geohash) based services.
It works anywhere JavaScript runs.

[![travis build](https://img.shields.io/travis/rmrs/random-location.svg?style=flat-square)](https://travis-ci.org/rmrs/random-location)
[![codecov coverage](https://img.shields.io/codecov/c/github/rmrs/random-location.svg?style=flat-square)](https://codecov.io/github/rmrs/random-location)
[![version](https://img.shields.io/npm/v/random-location.svg?style=flat-square)](http://npm.im/random-location)
[![MIT License](https://img.shields.io/npm/l/random-location.svg?style=flat-square)](http://opensource.org/licenses/MIT)

<img alt="Web Example" width=533px src="https://github.com/rmrs/random-location/raw/master/examples/web/example.png"> <img alt="React-Native Example" width=300px src="https://github.com/rmrs/random-location/raw/master/examples/react-native/example.png">

[`web example`](https://github.com/rmrs/random-location/tree/master/examples/web) | 
[`react-native example`](https://github.com/rmrs/random-location/tree/master/examples/react-native)

## Installation

Using [npm](https://www.npmjs.com/):
~~~
$ npm install --save random-location
~~~

Then use as you would anything else:

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

## Usage

### Generating random coordinates within a circle
Lets say we'd like to get a random location that its distance from
[Twitter's HQ](https://www.google.co.il/maps/place/Twitter+HQ/@37.7768006,-122.4187928,17z/data=!3m1!4b1!4m5!3m4!1s0x8085809c6c8f4459:0xb10ed6d9b5050fa5!8m2!3d37.7767964!4d-122.4166041?hl=en)
is **at most** `500` meters:

```js
// Twitter HQ
const P = {
  latitude: 37.7768006,
  longitude: -122.4187928
}

const R = 500 // meters

const randomPoint = randomLocation.randomCirclePoint(P, R)

// randomPoint => { latitude: 37.77636619, longitude: -122.416575663 }
```

### Generating random coordinates on a circle circumference
Lets say we'd like to get a random location that its distance from
[Twitter's HQ](https://www.google.co.il/maps/place/Twitter+HQ/@37.7768006,-122.4187928,17z/data=!3m1!4b1!4m5!3m4!1s0x8085809c6c8f4459:0xb10ed6d9b5050fa5!8m2!3d37.7767964!4d-122.4166041?hl=en)
is **exactly** `700` meters:

```js
// Twitter HQ
const P = {
  latitude: 37.7768006,
  longitude: -122.4187928
}

const R = 700 // meters

const randomPoint = randomLocation.randomCircumferencePoint(P, R)

// randomPoint => { latitude: 37.7828897, longitude: -122.4167713 }
```

### Measure the distance between two points
```js
// Eiffel Tower
const P1 = {
  latitude: 48.8583736,
  longitude: 2.2922926,
}

// Notre-Dame Cathedral
const P2 = {
  latitude: 48.8529717,
  longitude: 2.3477134,
}

// Prints True
console.log(Math.floor(randomLocation.distance(P1, P2)) === 4098)
 
```

