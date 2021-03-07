import React, { useContext, useEffect } from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { withNavigationFocus } from 'react-navigation'

import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import { LocationContext } from '../contexts'
import { useLocation } from '../hooks'

const TrackCreate = ({ isFocused }) => {
    const {
        state: { name, locations, recording },
        actions,
    } = useContext(LocationContext)
    const [error, location] = useLocation(isFocused || recording)

    useEffect(() => {
        if (location) actions.addLocation(location, recording)
    }, [location, recording])

    return (
        <View style={styles.container}>
            <Text h3 style={styles.text}>
                TrackCreateScreen
            </Text>
            <Map />
            {error && <Text style={styles.error}>{error}</Text>}
            <TrackForm />
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
