import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'
import randomLocation from 'random-location'

export default class random_location extends Component {
  render() {
    // Twitter HQ
    const P = {
      latitude: 37.7768006,
      longitude: -122.4187928,
    }

    const E1 = {
      latitude: P.latitude,
      longitude: P.longitude - 0.01,
    }
    const E2 = {
      latitude: P.latitude,
      longitude: P.longitude + 0.01,
    }
    const N = {
      latitude: P.latitude - 0.02,
      longitude: P.longitude,
    }
    const C = {
      latitude: P.latitude - 0.01,
      longitude: P.longitude,
    }

    let e1_markers = []
    for (let i = 0; i < 100; i++) {
      e1_markers.push(
        <MapView.Marker
          coordinate={randomLocation.randomCirclePoint(E1, 400)}
          pinColor={'green'}
          key={i}
        />
      )
    }

    let e2_markers = []
    for (let i = 100; i < 200; i++) {
      e2_markers.push(
        <MapView.Marker
          coordinate={randomLocation.randomCirclePoint(E2, 400)}
          pinColor={'blue'}
          key={i}
        />
      )
    }

    let n_markers = []
    for (let i = 200; i < 300; i++) {
      n_markers.push(
        <MapView.Marker
          coordinate={randomLocation.randomCircumferencePoint(N, 900)}
          pinColor={'red'}
          key={i}
        />
      )
    }

    let c_markers = []
    for (let i = 300; i < 500; i++) {
      c_markers.push(
        <MapView.Marker
          coordinate={randomLocation.randomCircumferencePoint(C, 2800)}
          pinColor={'orange'}
          key={i}
        />
      )
    }

    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          ...P,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {e1_markers}
        {e2_markers}
        {n_markers}
        {c_markers}
      </MapView>
    )
  }
}

AppRegistry.registerComponent('random_location', () => random_location)
