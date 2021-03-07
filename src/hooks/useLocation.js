import { useEffect, useState } from 'react'
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from 'expo-location'

/**
 *
 * @returns an array containing error, location
 */
const useLocation = (shouldTrack) => {
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        let subscriber
        const startWatching = async () => {
            try {
                const { granted } = await requestPermissionsAsync()
                if (!granted)
                    setError('Please grant permission to use location services')
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        distanceInterval: 10,
                        timeInterval: 1000,
                    },
                    setLocation
                )
            } catch (err) {
                setError(err.message)
            }
        }

        if (shouldTrack) {
            startWatching()
        } else {
            if (subscriber) subscriber.remove()
            subscriber = null
        }

        return () => {
            if (subscriber) subscriber.remove()
        }
    }, [shouldTrack])

    return [error, location]
}

export default useLocation
