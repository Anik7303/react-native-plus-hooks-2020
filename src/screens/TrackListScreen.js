import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

const TrackListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>TrackList Screen</Text>
            <Button
                title="Go back to signin screen"
                onPress={() => navigation.navigate('Signin')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
})

export default TrackListScreen
