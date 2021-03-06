import * as Location from 'expo-location'

const tenMetersInDegrees = 0.0001

const getLocation = (increment = 1) => ({
    coords: {
        accuracy: 5,
        altitude: 0,
        altitudeAccuracy: 0.5,
        heading: 178.9799346,
        latitude: 23.72905 + increment * tenMetersInDegrees,
        longitude: 90.4152404 + increment * tenMetersInDegrees,
        speed: 21.8636531,
    },
    timestamp: 10000000000,
})

let intervalId = null

const start = () => {
    let counter = 0
    intervalId = setInterval(() => {
        Location.EventEmitter.emit('Expo.locationChanged', {
            watchId: Location._getCurrentWatchId(),
            location: getLocation(counter++),
        })
    }, 1000)
}

const stop = () => {
    if (intervalId) clearInterval(intervalId)
    intervalId = null
}

export default { start, stop }
