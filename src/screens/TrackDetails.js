import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import MapView, { Polyline } from 'react-native-maps'

import { TrackContext } from '../contexts'
import Spacer from '../components/Spacer'

const TrackDetails = ({ navigation }) => {
    const trackId = navigation.getParam('_id')
    const {
        state: { tracks },
    } = useContext(TrackContext)
    const track = tracks.find((track) => track._id === trackId)

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h4 style={styles.title} numberOfLines={1}>
                    {track.name}
                </Text>
            </Spacer>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                    ...track.locations[0].coords,
                }}
            >
                <Polyline
                    strokeColor="green"
                    strokeWidth={4}
                    coordinates={track.locations.map((loc) => loc.coords)}
                />
            </MapView>
        </View>
    )
}

TrackDetails.navigationOptions = { title: '' }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    map: {
        flex: 1,
    },
    title: {
        textTransform: 'capitalize',
    },
})

export default TrackDetails
