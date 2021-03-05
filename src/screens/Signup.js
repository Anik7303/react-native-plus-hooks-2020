import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../contexts/AuthContext'

const Signup = ({ navigation }) => {
    const { state, actions } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={actions.resetError}
                onWillBlur={actions.resetError}
            />
            <AuthForm
                error={state.error}
                headerText="Signup with Tracker"
                onSubmit={actions.signup}
                submitButtonText="Signup"
            />
            <NavLink
                onPress={() => navigation.navigate('Signin')}
                text="Already have an account? Signin"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingBottom: 100,
        justifyContent: 'center',
    },
})

export default Signup
