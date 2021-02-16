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
            return { initialState, token: payload }
        case 'signout':
            return { ...state, isSignedIn: false, token: null }
        case 'set_error':
            return { ...state, error: payload.error }
        case 'reset_error':
            return { ...state, error: null }
        default:
            return state
    }
}

const signin = (dispatch) => async (email, password) => {
    try {
        const res = await server.post('/signin', { email, password })
        await AsyncStorage.setItem('token', res.data.token)
        dispatch({ type: 'signin', payload: res.data })
        navigate('TrackList')
    } catch (err) {
        dispatch({ type: 'set_error', payload: err.response.data })
    }
}

const signup = (dispatch) => async (email, password) => {
    try {
        const res = await server.post('/signup', { email, password })
        await AsyncStorage.setItem('token', res.data.token)
        dispatch({ type: 'signup', payload: res.data })
        navigate('TrackList')
    } catch (err) {
        dispatch({ type: 'set_error', payload: err.response.data })
    }
}

const signout = (dispatch) => () => dispatch({ type: 'signout' })

const actions = { signin, signup, signout }

const { Context, Provider } = createAppContext(reducer, actions, initialState)

export default Context
export { Provider }
