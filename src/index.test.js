import { expect } from 'chai'
import randomLocation from './index'

describe('random-location', () => {
  describe('distance between two points (haversine)', () => {
    it('close distance points', () => {
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
      expect(Math.floor(randomLocation.distance(P1, P2))).to.equal(4098)
    })

    it('far distance points', () => {
      // Nordkapp
      const P1 = {
        latitude: 71.1685659,
        longitude: 25.7802643,
      }
      // Oslo
      const P2 = {
        latitude: 59.8939225,
        longitude: 10.7150777,
      }
      expect(Math.floor(randomLocation.distance(P1, P2))).to.equal(1423662)
    })
  })

  describe('random generation of points', () => {
    it('on a circle circumference; given center point and radius', () => {
      // Eiffel Tower
      const P1 = {
        latitude: 48.8583736,
        longitude: 2.2922926,
      }
      const R = 1234 // meters

      for (let i = 0; i < 100; i++) {
        const randomPoint = randomLocation.randomCircumferencePoint(P1, R)
        const distance = Math.floor(randomLocation.distance(P1, randomPoint))
        expect(distance).to.be.within(R - 1, R + 1)
      }
    })
    it('inside a circle circumference; given center point and radius', () => {
      // Eiffel Tower
      const P1 = {
        latitude: 48.8583736,
        longitude: 2.2922926,
      }
      const R = 1234 // meters

      for (let i = 0; i < 100; i++) {
        const randomPoint = randomLocation.randomCirclePoint(P1, R)
        const distance = Math.floor(randomLocation.distance(P1, randomPoint))
        expect(distance).to.be.at.most(R + 1)
      }
    })
  })
})
