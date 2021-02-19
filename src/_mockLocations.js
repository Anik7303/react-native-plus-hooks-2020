import * as Location from 'expo-location'

const tenMetersWithDegree = 0.0001

const getLocation = (increment) => ({
    timestamp: 100000000,
    coords: {
        accuracy: 603,
        altitude: 5,
        altitudeAccuracy: 0.5,
        heading: 258.70513916,
        latitude: 37.4219983 + increment * tenMetersWithDegree,
        longitude: -122.0840002 + increment * tenMetersWithDegree,
        speed: 100,
    },
})

export default () => {
    let counter = 0
    const id = setInterval(() => {
        Location.EventEmitter.emit('Expo.locationChanged', {
            watchId: Location._getCurrentWatchId(),
            location: getLocation(counter),
        })
        counter++
    }, 1000)
    return () => {
        clearInterval(id)
    }
}
