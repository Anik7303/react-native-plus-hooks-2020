import React, { useState, useContext } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'

import { AuthContext } from '../contexts'

const SignupScreen = ({ navigation }) => {
    const { actions } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = () => {
        if (!email || !password) {
            return actions.setError(
                422,
                'Email and Password fields cannot be empty'
            )
        } else if (password !== confirmPassword) {
            return actions.setError(
                422,
                "Password and Confirm password doesn't match"
            )
        }
        actions.signup(email, password)
    }

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={actions.clearError}
                onWillBlur={actions.clearError}
            />
            <Text style={styles.heading} h3>
                Sign Up with Tracks
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
                <Input
                    label="Confirm password"
                    secureTextEntry
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Sign Up" onPress={handleSubmit} />
                </View>
                <TouchableOpacity
                    style={styles.cta}
                    onPress={() => navigation.navigate('Signin')}
                >
                    <Text>Already have an account?</Text>
                    <Text style={styles.link}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

SignupScreen.navigationOptions = {
    headerShown: false,
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    container: {
        backgroundColor: '#fff',
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
        maxHeight: 600,
        justifyContent: 'center',
    },
    link: {
        color: 'blue',
        fontSize: 16,
        marginLeft: 5,
    },
})

export default SignupScreen
