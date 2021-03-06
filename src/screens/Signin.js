import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { AuthContext } from '../contexts'

const Signin = ({ navigation }) => {
    const { state, actions } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={actions.resetError}
                onWillBlur={actions.resetError}
            />
            <AuthForm
                error={state.error}
                headerText="Signin to Your Account"
                onSubmit={actions.signin}
                submitButtonText="Signin"
            />
            <NavLink
                onPress={() => navigation.navigate('Signup')}
                text="Don't have an account? Signup"
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

export default Signin
