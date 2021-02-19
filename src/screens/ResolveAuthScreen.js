import React, { useEffect, useContext } from 'react'

import { AuthContext } from '../contexts'

const ResolveAuthScreen = () => {
    const { actions } = useContext(AuthContext)

    useEffect(() => {
        actions.checkAuthStatus()
    }, [])

    return null
}

ResolveAuthScreen.navigationOptions = {
    headerShown: false,
}

export default ResolveAuthScreen
