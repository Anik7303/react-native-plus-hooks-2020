import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage'

import createDataContext from './createDataContext'
import { navigate } from '../navigationRef'
import { dispatchError } from '../utils'

const Action = {
    RESET: 'reset',
    RESET_ERROR: 'reset_error',
    SET_ERROR: 'set_error',
    SIGNOUT: 'signout',
    SIGNIN: 'signin',
    SIGNUP: 'signup',
}

const initialState = {
    error: null,
    token: null,
}

const TOKEN = 'token'

const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case Action.RESET:
            return { ...initialState }
        case Action.RESET_ERROR:
            return { ...state, error: null }
        case Action.SET_ERROR:
            return { ...state, error: payload }
        case Action.SIGNOUT:
            return { ...state, token: null }
        case Action.SIGNIN:
        case Action.SIGNUP:
            return { ...initialState, token: payload }
        default:
            return state
    }
}

const resetError = (dispatch) => () => dispatch({ type: Action.RESET_ERROR })

const signin = (dispatch) => async (data) => {
    try {
        const response = await trackerApi.post('/signin', data)

        await AsyncStorage.setItem(TOKEN, response.data.token)

        dispatch({ type: Action.SIGNIN, payload: response.data.token })

        navigate('TrackList')
    } catch (err) {
        dispatchError(dispatch, err)
    }
}

const signup = (dispatch) => async (data) => {
    try {
        const response = await trackerApi.post('/signup', data)

        await AsyncStorage.setItem(TOKEN, response.data.token)

        dispatch({ type: Action.SIGNUP, payload: response.data?.token })

        navigate('TrackList')
    } catch (err) {
        dispatchError(dispatch, err)
    }
}

const signout = (dispatch) => async () => {
    try {
        await AsyncStorage.removeItem(TOKEN)

        dispatch({ type: Action.SIGNOUT })

        navigate('Signin')
    } catch (err) {
        dispatchError(dispatch, err)
    }
}

const tryLocalLogin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem(TOKEN)
    if (token) {
        dispatch({ type: Action.SIGNIN, payload: token })
        return navigate('TrackList')
    }
    navigate('Signin')
}

const actions = { resetError, signin, signout, signup, tryLocalLogin }

export const { Context, Provider } = createDataContext(
    reducer,
    actions,
    initialState
)
