import React, { useContext, useEffect } from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { withNavigationFocus } from 'react-navigation'

import MockLocations from '../_mockLocations'
import Map from '../components/Map'
import { LocationContext } from '../contexts'
import { useLocation } from '../hooks'

const TrackCreate = ({ isFocused }) => {
    const [error, location] = useLocation()
    const { state, actions } = useContext(LocationContext)

    console.log({ location, state, actions })

    useEffect(() => {
        if (isFocused) MockLocations.start()

        return () => {
            MockLocations.stop()
        }
    }, [isFocused])

    useEffect(() => {
        if (location) actions.setLocation(location)
    }, [location])

    return (
        <View style={styles.container}>
            <Text h3 style={styles.text}>
                TrackCreateScreen
            </Text>
            <Map />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
    },
    error: {
        color: 'red',
        fontSize: 16,
    },
    text: {
        textAlign: 'center',
    },
})

export default withNavigationFocus(TrackCreate)
