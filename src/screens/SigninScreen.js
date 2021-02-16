import React, { useState, useContext } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'

import { AuthContext } from '../contexts'

const SigninScreen = ({ navigation }) => {
    const { actions } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        if (email && password) {
            actions.signin(email, password)
            // .then(() => navigation.navigate('mainFlow'))
            // .catch((err) => console.error({ singin: err }))
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading} h3>
                Sign In with Tracks
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    label="Email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    label="Password"
                    secureTextEntry
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={setPassword}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Sign In" onPress={handleSubmit} />
                </View>
                <TouchableOpacity
                    style={styles.cta}
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text>Don't have an account?</Text>
                    <Text style={styles.link}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

SigninScreen.navigationOptions = {
    headerShown: false,
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    container: {
        padding: 20,
        marginTop: '10%',
        flex: 1,
    },
    cta: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        textAlign: 'center',
    },
    inputContainer: {
        flex: 1,
        maxHeight: 500,
        justifyContent: 'center',
    },
    link: {
        color: 'blue',
        fontSize: 16,
        marginLeft: 5,
    },
})

export default SigninScreen
