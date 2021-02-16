import React, { createContext, useReducer } from 'react'

const createAppContext = (reducer, actions, initialState) => {
    const Context = createContext(null)

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const boundActions = {}
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value={{ state, actions: boundActions }}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider }
}

export default createAppContext
