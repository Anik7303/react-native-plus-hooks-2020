import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-elements'

const TrackList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text h3 style={styles.text}>
                TrackListScreen
            </Text>
            <Button
                title="Go to TrackDetails screen"
                onPress={() => navigation.navigate('TrackDetails')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: { textAlign: 'center' },
})

export default TrackList
