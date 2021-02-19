import AsyncStorage from '@react-native-async-storage/async-storage'

import createAppContext from './createAppContext'
import server from '../api/server'
import { navigate } from '../navigationRef'

const initialState = {
    token: null,
    error: null,
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'signin':
        case 'signup':
            return { ...initialState, token: payload }
        case 'signout':
            return { ...state, isSignedIn: false, token: null }
        case 'set_error':
            return { ...state, error: payload }
        case 'reset_error':
            return { ...state, error: null }
        default:
            return state
    }
}

const checkAuthStatus = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('TrackList')
    } else {
        navigate('Signin')
    }
}

const signin = (dispatch) => async (email, password) => {
    try {
        const res = await server.post('/signin', { email, password })
        await AsyncStorage.setItem('token', res.data.token)
        dispatch({ type: 'signin', payload: res.data })
        navigate('TrackList')
    } catch (err) {
        const error = {
            code: err.response.status || 500,
            message: err.response.data.error || err.message,
        }
        dispatch({ type: 'set_error', payload: error })
    }
}

const signup = (dispatch) => async (email, password) => {
    try {
        const res = await server.post('/signup', { email, password })
        await AsyncStorage.setItem('token', res.data.token)
        dispatch({ type: 'signup', payload: res.data })
        navigate('TrackList')
    } catch (err) {
        const error = {
            code: err.response.status || 500,
            message: err.response.data.error || err.message,
        }
        dispatch({ type: 'set_error', payload: error })
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout' })
    navigate('Signin')
}

const setError = (dispatch) => (code, message) =>
    dispatch({ type: 'set_error', payload: { code, message } })

const clearError = (dispatch) => () => dispatch({ type: 'reset_error' })

const actions = {
    signin,
    signup,
    signout,
    setError,
    clearError,
    checkAuthStatus,
}

const { Context, Provider } = createAppContext(reducer, actions, initialState)

export default Context
export { Provider }
