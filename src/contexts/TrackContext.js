import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { dispatchError } from '../utils'
import { navigate } from '../navigationRef'

const Action = {
    REMOVE_TRACK: 'remove_track',
    RESET: 'reset',
    RESET_ERROR: 'reset_error',
    SAVE_TRACK: 'save_track',
    FETCH_TRACKS: 'fetch_tracks',
    SET_ERROR: 'set_error',
}

const initialState = {
    tracks: [],
    error: null,
}

const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case Action.RESET:
            return initialState
        case Action.RESET_ERROR:
            return { ...state, error: null }
        case Action.FETCH_TRACKS:
            return { ...state, tracks: payload }
        case Action.SET_ERROR:
            return { ...state, error: payload }
        default:
            return state
    }
}

const createTrack = (dispatch) => async (trackInfo) => {
    try {
        const response = await trackerApi.post('/tracks', trackInfo)
        dispatch({ type: Action.SAVE_TRACK, payload: response.data })
        navigate('TrackList')
    } catch (err) {
        dispatchError(dispatch, err)
    }
}

const fetchTracks = (dispatch) => async () => {
    try {
        const response = await trackerApi.get('/tracks')
        dispatch({ type: Action.FETCH_TRACKS, payload: response.data })
    } catch (err) {
        dispatchError(dispatch, err)
    }
}

const reset = (dispatch) => () => dispatch({ type: Action.RESET })

const resetError = (dispatch) => () => dispatch({ type: Action.RESET_ERROR })

const actions = {
    createTrack,
    fetchTracks,
    reset,
    resetError,
}

export const { Context, Provider } = createDataContext(
    reducer,
    actions,
    initialState
)
