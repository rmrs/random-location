const EARTH_RADIUS = 6371000 // meters
const DEG_TO_RAD = Math.PI / 180.0
const THREE_PI = Math.PI * 3
const TWO_PI = Math.PI * 2

const toRadians = deg => deg * DEG_TO_RAD
const toDegrees = rad => rad / DEG_TO_RAD

/*
Given a centerPoint C and a radius R, returns a random point that is on the
circumference defined by C and R.

centerPoint C is of type { latitude: A, longitude: B }
Where -90 <= A <= 90 and -180 <= B <= 180.

radius R is in meters.

Based on: http://www.movable-type.co.uk/scripts/latlong.html#destPoint
*/
const randomCircumferencePoint = (centerPoint, radius) => {
  const sinLat = Math.sin(toRadians(centerPoint.latitude))
  const cosLat = Math.cos(toRadians(centerPoint.latitude))

  // Random bearing (direction out 360 degrees)
  const bearing = Math.random() * TWO_PI
  const sinBearing = Math.sin(bearing)
  const cosBearing = Math.cos(bearing)

  // Theta is the approximated angular distance
  const theta = radius / EARTH_RADIUS
  const sinTheta = Math.sin(theta)
  const cosTheta = Math.cos(theta)

  let rLatitude, rLongitude
  rLatitude = Math.asin(sinLat * cosTheta + cosLat * sinTheta * cosBearing)

  rLongitude =
    toRadians(centerPoint.longitude) +
    Math.atan2(
      sinBearing * sinTheta * cosLat,
      cosTheta - sinLat * Math.sin(rLatitude)
    )

  // Normalize longitude L such that -PI < L < +PI
  rLongitude = (rLongitude + THREE_PI) % TWO_PI - Math.PI

  return { latitude: toDegrees(rLatitude), longitude: toDegrees(rLongitude) }
}

/*
Given a centerPoint C and a radius R, returns a random point that is inside
the circle defined by C and R.

centerPoint C is of type { latitude: A, longitude: B }
Where -90 <= A <= 90 and -180 <= B <= 180.

radius R is in meters.
*/
const randomCirclePoint = (centerPoint, radius) => {
  // http://mathworld.wolfram.com/DiskPointPicking.html
  return randomCircumferencePoint(
    centerPoint,
    Math.sqrt(Math.random()) * radius
  )
}

/*
Returns the distance in meters between two points P1 and P2. 

P1 and P2 are of type { latitude: A, longitude: B }
Where -90 <= A <= 90 and -180 <= B <= 180.

Basically it is the Haversine distance function.
Based on: http://www.movable-type.co.uk/scripts/latlong.html
*/
const distance = (P1, P2) => {
  const rP1 = {
    latitude: toRadians(P1.latitude),
    longitude: toRadians(P1.longitude),
  }
  const rP2 = {
    latitude: toRadians(P2.latitude),
    longitude: toRadians(P2.longitude),
  }

  const D = {
    latitude: Math.sin((rP2.latitude - rP1.latitude) / 2),
    longitude: Math.sin((rP2.longitude - rP1.longitude) / 2),
  }

  const A =
    D.latitude * D.latitude +
    D.longitude * D.longitude * Math.cos(rP1.latitude) * Math.cos(rP2.latitude)

  const C = 2 * Math.atan2(Math.sqrt(A), Math.sqrt(1 - A))

  return EARTH_RADIUS * C
}

module.exports = { distance, randomCircumferencePoint, randomCirclePoint }
