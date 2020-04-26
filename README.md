# random-location

[`random-location`](https://www.npmjs.com/package/random-location) gets you
random coordinates within a circle (or on a circumference) given a center point and radius.
We use it to stress test our [geohash](https://en.wikipedia.org/wiki/Geohash) based services.
It works anywhere JavaScript runs.

[![Build](https://circleci.com/gh/rmrs/random-location.svg?style=svg)](https://circleci.com/gh/rmrs/random-location)
[![Coverage](https://codecov.io/gh/rmrs/random-location/branch/master/graph/badge.svg)](https://codecov.io/gh/rmrs/random-location)
[![Version](https://img.shields.io/npm/v/random-location.svg?style=flat-square)](http://npm.im/random-location)
[![MIT License](https://img.shields.io/npm/l/random-location.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


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
const randomLocation = require('random-location')
```

The UMD build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/random-location/dist/randomLocation.umd.js"></script>
```

## API

### `randomLocation.randomCirclePoint(...)`

Outputs a Point ( `{ latitude: ..., longitude: ... }`) of random coordinates within a circle.

Function definition:

```js
const randomCirclePoint = (centerPoint, radius, randomFn = Math.random) => { ... }
```

Where:

- **`centerPoint`** *required* An object with a `latitude` and `longitude` fields.
- **`radius`** *required* The maximum distance (meters) from `centerPoint`.
- **`randomFn`** *optional* A random function. Output is >=0 and <=1. Allows usage of seeded random number generators (see [`seedrandom`](https://www.npmjs.com/package/seedrandom)) - more predictability when testing.

### `randomLocation.randomCircumferencePoint(...)`

Outputs a Point ( `{ latitude: ..., longitude: ... }`) of random coordinates on a circle's circumference.

Function definition:

```js
const randomCircumferencePoint= (centerPoint, radius, randomFn = Math.random) => { ... }
```

Where:

- **`centerPoint`** *required* An object with a `latitude` and `longitude` fields.
- **`radius`** *required* The distance (meters) from `centerPoint`.
- **`randomFn`** *optional* A random function. Output is >=0 and <=1. Allows usage of seeded random number generators (see [`seedrandom`](https://www.npmjs.com/package/seedrandom)) - more predictability when testing.

### `randomLocation.randomAnnulusPoint(...)`

Outputs a Point ( `{ latitude: ..., longitude: ... }`) of random coordinates in a region bounded by two concentric circles (annulus).

Function definition:

```js
const randomCircumferencePoint= (centerPoint, radius, randomFn = Math.random) => { ... }
```

Where:

- **`centerPoint`** *required* An object with a `latitude` and `longitude` fields.
- **`innerRadius`** *required* The readius of the smaller circle.
- **`outerRadius`** *required* The readius of the larger circle.
- **`randomFn`** *optional* A random function. Output is >=0 and <=1. Allows usage of seeded random number generators (see [`seedrandom`](https://www.npmjs.com/package/seedrandom)) - more predictability when testing.



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

## Hacking

Clone. Install. Hack. Open a **PR**.

## License

MIT.
