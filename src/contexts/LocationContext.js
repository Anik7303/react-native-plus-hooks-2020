import createDataContext from './createAppContext'

const initialState = {
    currentLocation: null,
    locations: [],
    recording: false,
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'start_recording':
            return { ...state, recording: true }
        case 'stop_recording':
            return { ...state, recording: false }
        case 'add_location':
            return { ...state, currentLocation: payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const actions = {}

actions.startRecording = (dispatch) => () =>
    dispatch({ type: 'start_recording' })

actions.stopRecording = (dispatch) => () => dispatch({ type: 'stop_recording' })

actions.addLocation = (dispatch) => (location) =>
    dispatch({ type: 'add_location', payload: location })

const { Context, Provider } = createDataContext(reducer, actions, initialState)

export default Context
export { Provider }
