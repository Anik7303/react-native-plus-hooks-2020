import createDataContext from './createDataContext'

const Action = {
    ADD_LOCATION: 'add_location',
    SET_LOCATION: 'set_location',
    START_RECORDING: 'start_recording',
    STOP_RECORDING: 'stop_recording',
    RESET: 'reset',
}

const initialState = {
    currentLocation: null,
    locations: [],
    recording: false,
}

const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case Action.ADD_LOCATION:
            return { ...state, locations: [...state.locations, payload] }
        case Action.RESET:
            return initialState
        case Action.SET_LOCATION:
            return { ...state, currentLocation: payload }
        case Action.START_RECORDING:
            return { ...state, recording: true }
        case Action.STOP_RECORDING:
            return { ...state, recording: false }
        default:
            return state
    }
}

const addLocation = (dispatch) => (location) =>
    dispatch({ type: Action.ADD_LOCATION, payload: location })

const reset = (dispatch) => () => dispatch({ type: Action.RESET })

const setLocation = (dispatch) => (location) =>
    dispatch({ type: Action.SET_LOCATION, payload: location })

const startRecording = (dispatch) => () =>
    dispatch({ type: Action.START_RECORDING })

const stopRecording = (dispatch) => () =>
    dispatch({ type: Action.STOP_RECORDING })

const actions = {
    addLocation,
    reset,
    setLocation,
    startRecording,
    stopRecording,
}

export const { Context, Provider } = createDataContext(
    reducer,
    actions,
    initialState
)
