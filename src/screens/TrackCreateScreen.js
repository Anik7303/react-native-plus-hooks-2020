import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Map from '../components/Map'
import mockLocation from '../_mockLocations'
import { LocationContext } from '../contexts'
import { useLocation } from '../hooks'

const TrackCreateScreen = () => {
    const { actions } = useContext(LocationContext)
    const { location, error } = useLocation()
    console.log({ error, location })

    useEffect(() => {
        const remove = mockLocation()
        return () => {
            remove()
        }
    }, [])

    useEffect(() => {
        actions.addLocation(location)
    }, [location])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Create a Track</Text>
            <Map />
            {error && <Text>Please enable location services</Text>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
})

export default TrackCreateScreen
