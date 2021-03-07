import createDataContext from './createDataContext'

const Action = {
    ADD_LOCATION: 'add_location',
    CHANGE_NAME: 'change_name',
    SET_CURRENT_LOCATION: 'set_current_location',
    START_RECORDING: 'start_recording',
    STOP_RECORDING: 'stop_recording',
    RESET: 'reset',
}

const initialState = {
    currentLocation: null,
    locations: [],
    name: '',
    recording: false,
}

const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case Action.ADD_LOCATION:
            return { ...state, locations: [...state.locations, payload] }
        case Action.CHANGE_NAME:
            return { ...state, name: payload }
        case Action.RESET:
            return initialState
        case Action.SET_CURRENT_LOCATION:
            return { ...state, currentLocation: payload }
        case Action.START_RECORDING:
            return { ...state, recording: true }
        case Action.STOP_RECORDING:
            return { ...state, recording: false }
        default:
            return state
    }
}

const addLocation = (dispatch) => (location, recording) => {
    dispatch({ type: Action.SET_CURRENT_LOCATION, payload: location })
    if (recording) {
        dispatch({ type: Action.ADD_LOCATION, payload: location })
    }
}

const changeName = (dispatch) => (name) =>
    dispatch({ type: Action.CHANGE_NAME, payload: name })

const reset = (dispatch) => () => dispatch({ type: Action.RESET })

const startRecording = (dispatch) => () =>
    dispatch({ type: Action.START_RECORDING })

const stopRecording = (dispatch) => () =>
    dispatch({ type: Action.STOP_RECORDING })

const actions = {
    addLocation,
    changeName,
    reset,
    startRecording,
    stopRecording,
}

export const { Context, Provider } = createDataContext(
    reducer,
    actions,
    initialState
)
