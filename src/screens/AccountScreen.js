import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AuthContext } from '../contexts'

const AccountScreen = () => {
    const { actions } = useContext(AuthContext)
    return (
        <SafeAreaView style={styles.container}>
            <Button title="Sign Out" onPress={actions.signout} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
})

export default AccountScreen
