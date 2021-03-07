import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import MapView, { Circle, Polyline } from 'react-native-maps'

import { LocationContext } from '../contexts'

const delta = 0.005

const Map = () => {
    const {
        state: { currentLocation, locations },
    } = useContext(LocationContext)

    if (!currentLocation)
        return (
            <ActivityIndicator
                size="large"
                color="dodgerblue"
                style={{
                    width: '100%',
                    height: 300,
                }}
            />
        )

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
            <Polyline
                coordinates={locations.map((location) => location.coords)}
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 200,
        // color: 'dodgerblue',
    },
    map: {
        height: 300,
        width: '100%',
    },
})

export default Map
