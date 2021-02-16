import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'

const SignupScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>Signup Screen</Text>
        <Button
            title="Go to Signin"
            onPress={() => navigation.navigate('Signin')}
        />
    </View>
)

SignupScreen.navigationOptions = {
    headerShown: false,
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: '10%',
        flex: 1,
    },
})

export default SignupScreen
