import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'

import { LocationContext } from '../contexts'

const Map = () => {
    const {
        state: { currentLocation },
    } = useContext(LocationContext)

    if (!currentLocation) return null

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={30}
                strokeColor="rgb(158, 158, 255)"
                fillColor="rgba(158, 158, 255, 0.3)"
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    map: {
        height: '50%',
    },
})

export default Map
