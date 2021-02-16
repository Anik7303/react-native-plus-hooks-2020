import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'

const SigninScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>Signin Screen</Text>
        <Button
            title="Go to Signup"
            onPress={() => navigation.navigate('Signup')}
        />
        <Button
            title="Go to TrackList Screen"
            onPress={() => navigation.navigate('TrackList')}
        />
    </View>
)

SigninScreen.navigationOptions = {
    headerShown: false,
    // header: () => false,
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: '10%',
        flex: 1,
    },
})

export default SigninScreen
