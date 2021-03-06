import React, { useContext, useEffect } from 'react'
import AppLoading from 'expo-app-loading'

import { AuthContext } from '../contexts'

const ResolveAuth = () => {
    const { actions } = useContext(AuthContext)

    useEffect(() => {
        actions.tryLocalLogin()
    }, [])

    return <AppLoading />
}

export default ResolveAuth
