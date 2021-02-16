import createAppContext from './createAppContext'
import server from '../api/server'

const initialState = {
    isSignedIn: false,
    token: null,
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'signin':
            return { ...state, isSignedIn: true, token: payload }
        case 'signout':
            return { ...state, isSignedIn: false, token: null }
        default:
            return state
    }
}

const signin = (dispatch) => (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await server.post('/signin', { email, password })
            dispatch({ type: 'signin', payload: res.data })
            resolve()
        } catch (err) {
            reject(err)
        }
    })
}

const signup = (dispatch) => (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await server.post('/signup', { email, password })
            dispatch({ type: 'signup', payload: res.data })
            resolve()
        } catch (err) {
            reject(err)
        }
    })
}

const actions = { signin, signup }

const { Context, Provider } = createAppContext(reducer, actions, initialState)

export default Context
export { Provider }
