import React, { useContext } from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-elements'

import { Context as AuthContext } from '../contexts/AuthContext'

const Account = () => {
    const { actions } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text h3 style={styles.text}>
                AccountScreen
            </Text>
            <Button
                title="Sign out"
                style={styles.button}
                onPress={actions.signout}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        textTransform: 'capitalize',
    },
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
    },
    text: {
        textAlign: 'center',
    },
})

export default Account
