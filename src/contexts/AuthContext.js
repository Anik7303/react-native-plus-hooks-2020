import createAppContext from './createAppContext'

const initialState = {
    isSignedIn: false,
    token: null,
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        default:
            return state
    }
}

const actions = {}

const { Context, Provider } = createAppContext(reducer, actions, initialState)

export default Context
export { Provider }
