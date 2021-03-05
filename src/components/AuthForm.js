import React, { useState, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'

import Spacer from './Spacer'

const AuthForm = ({ error, headerText, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const nextInputRef = useRef()

    return (
        <>
            <Text h3 style={styles.title}>
                {headerText}
            </Text>
            <Spacer />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Input
                autoCorrect={false}
                autoCapitalize="none"
                label="Email"
                blurOnSubmit={false}
                onChangeText={setEmail}
                onSubmitEditing={() => nextInputRef.current.focus()}
                value={email}
            />
            <Input
                autoCorrect={false}
                autoCapitalize="none"
                label="Password"
                blurOnSubmit={true}
                onChangeText={setPassword}
                ref={nextInputRef}
                secureTextEntry
                value={password}
            />
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({ email, password })}
                    style={styles.button}
                />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        textTransform: 'capitalize',
    },
    error: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
    },
})

export default AuthForm
