import React, { useContext } from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

import { AuthContext } from '../contexts'

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

Account.navigationOptions = {
    tabBarIcon: <Ionicons name="settings" size={20} />,
    title: 'Account',
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
