import React, { useContext, useEffect } from 'react'
import AppLoading from 'expo-app-loading'

import { Context as AuthContext } from '../contexts/AuthContext'

const ResolveAuth = () => {
    const { actions } = useContext(AuthContext)

    useEffect(() => {
        actions.tryLocalLogin()
    }, [])

    return <AppLoading />
}

export default ResolveAuth
