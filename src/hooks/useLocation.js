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
const useLocation = () => {
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        let unsubscribe
        const startWatching = async () => {
            try {
                const { granted } = await requestPermissionsAsync()
                if (!granted)
                    setError('Please grant permission to use location services')
                unsubscribe = await watchPositionAsync(
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

        startWatching()

        return () => {
            if (unsubscribe) unsubscribe.remove()
        }
    }, [])

    return [error, location]
}

export default useLocation
