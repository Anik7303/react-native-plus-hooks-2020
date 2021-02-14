import createDataContext from './createDataContext'

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, action.payload]
        case 'delete_blogpost':
            return state.filter((post) => post.id !== action.payload)
        case 'edit_blogpost':
            const { id, title, content } = action.payload
            return state.map((post) =>
                post.id === id ? { id, title, content } : post
            )
        default:
            return state
    }
}

const addBlogPost = (dispatch) => (title, content, callback) => {
    dispatch({
        type: 'add_blogpost',
        payload: { id: Math.floor(Math.random() * 999999), title, content },
    })
    if (callback) {
        callback()
    }
}

const editBlogPost = (dispatch) => (id, title, content, callback) => {
    dispatch({
        type: 'edit_blogpost',
        payload: { id, title, content },
    })
    if (callback) {
        callback()
    }
}

const deleteBlogPost = (dispatch) => (id) =>
    dispatch({ type: 'delete_blogpost', payload: id })

const { Context, Provider } = createDataContext(
    reducer,
    { addBlogPost, editBlogPost, deleteBlogPost },
    []
)

export { Provider }
export default Context
