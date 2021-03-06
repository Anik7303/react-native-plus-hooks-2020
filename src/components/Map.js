import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import MapView, { Circle } from 'react-native-maps'

import { LocationContext } from '../contexts'

const delta = 0.005

const Map = () => {
    const {
        state: { currentLocation },
    } = useContext(LocationContext)

    if (!currentLocation)
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />

    return (
        <MapView
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: delta,
                longitudeDelta: delta,
            }}
            style={styles.map}
        >
            <Circle
                center={currentLocation.coords}
                radius={20}
                strokeColor="rgb(158, 128, 255)"
                fillColor="rgba(158, 128, 255, 0.3)"
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    container: {},
    map: {
        height: 300,
        width: 'auto',
    },
})

export default Map
