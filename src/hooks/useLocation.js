import { useEffect, useState } from 'react'
import {
    requestPermissionsAsync,
    watchPositionAsync,
    Accuracy,
} from 'expo-location'

const useLocation = (interval = 1000, distance = 10) => {
    const [error, setError] = useState(null)
    const [location, setLocation] = useState(null)

    useEffect(() => {
        let positionWatcher
        const startWatching = async () => {
            try {
                const { granted } = await requestPermissionsAsync()
                if (!granted) throw new Error('location permission not granted')
                positionWatcher = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: interval,
                        distanceInterval: distance,
                    },
                    (location) => setLocation(location)
                )
            } catch (err) {
                setError(err.message)
            }
        }
        startWatching()
        return () => {
            if (positionWatcher) positionWatcher.remove()
        }
    }, [interval, distance])

    return { error, location }
}

export default useLocation
