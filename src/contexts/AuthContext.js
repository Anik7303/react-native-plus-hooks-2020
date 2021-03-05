import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage'

import createDataContext from './createDataContext'
import { navigate } from '../navigationRef'
import { dispatchError } from '../utils'

const initialState = {
    error: null,
    token: null,
}

const TOKEN = 'token'

const authReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'reset':
            return { ...initialState }
        case 'reset_error':
            return { ...state, error: null }
        case 'set_error':
            return { ...state, error: payload }
        case 'signin':
        case 'signup':
            return { ...initialState, token: payload }
        case 'signout':
            return { ...state, token: null }
        default:
            return state
    }
}

const tryLocalLogin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem(TOKEN)
    if (token) {
        dispatch({ type: 'signin', payload: token })
        return navigate('TrackList')
    }
    navigate('Signin')
}

const signin = (dispatch) => async (data) => {
    try {
        const response = await trackerApi.post('/signin', data)

        await AsyncStorage.setItem(TOKEN, response.data.token)

        dispatch({ type: 'signin', payload: response.data.token })

        navigate('TrackList')
    } catch (err) {
        dispatchError(dispatch, err)
    }
}

const signup = (dispatch) => async (data) => {
    try {
        const response = await trackerApi.post('/signup', data)

        await AsyncStorage.setItem(TOKEN, response.data.token)

        dispatch({ type: 'signup', payload: response.data?.token })

        navigate('TrackList')
    } catch (err) {
        dispatchError(dispatch, err)
    }
}

const signout = (dispatch) => async () => {
    try {
        await AsyncStorage.removeItem(TOKEN)

        dispatch({ type: 'signout' })

        navigate('Signin')
    } catch (err) {
        dispatchError(dispatch, err)
    }
}

const resetError = (dispatch) => () => dispatch({ type: 'reset_error' })

const { Context, Provider } = createDataContext(
    authReducer,
    { resetError, signin, signout, signup, tryLocalLogin },
    initialState
)

export { Context, Provider }
