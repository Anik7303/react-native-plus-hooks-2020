import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'

import { AuthContext } from '../contexts'

const SigninScreen = ({ navigation }) => {
    const { state, actions } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const onWillFocusListener = navigation.addListener('willFocus', () => {
            actions.clearError()
        })
        const onWillBlurListener = navigation.addListener('willBlur', () => {
            actions.clearError()
        })
        return () => {
            if (onWillFocusListener) onWillFocusListener.remove()
            if (onWillBlurListener) onWillBlurListener.remove()
        }
    }, [])

    const handleSubmit = () => {
        if (!email || !password) {
            return actions.setError(
                422,
                'Email and Password fields cannot be empty'
            )
        }
        actions.signin(email, password)
    }

    return (
        <View style={styles.container}>
            {state.error &&
                Alert.alert(`Error ${state.error.code}`, state.error.message, [
                    { text: 'Dismiss', onPress: actions.clearError },
                ])}
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
