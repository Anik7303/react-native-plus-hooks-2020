import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

const TrackCreate = () => {
    return (
        <View style={styles.container}>
            <Text h3 style={styles.text}>
                TrackCreateScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
    },
    text: {
        textAlign: 'center',
    },
})

export default TrackCreate
