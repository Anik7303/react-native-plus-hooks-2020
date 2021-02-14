import createDataContext from './createDataContext'
import server from '../api/server'

const reducer = (state, action) => {
    switch (action.type) {
        case 'store_blogposts':
            return action.payload
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

const getBlogPosts = (dispatch) => async (callback) => {
    try {
        const response = await server.get('/blogposts')
        dispatch({ type: 'store_blogposts', payload: response.data })
        if (callback) callback()
    } catch (err) {
        console.error(err.message)
    }
}

const addBlogPost = (dispatch) => async (title, content, callback) => {
    await server.post('/blogposts', { title, content })
    if (callback) callback()
}

const editBlogPost = (dispatch) => async (id, title, content, callback) => {
    try {
        const res = await server.put(`/blogposts/${id}`, { title, content })
        dispatch({ type: 'edit_blogpost', payload: res.data })
        if (callback) callback()
    } catch (err) {
        console.error(err.message)
    }
}

const deleteBlogPost = (dispatch) => async (id) => {
    await server.delete(`/blogposts/${id}`)
    dispatch({ type: 'delete_blogpost', payload: id })
}

const { Context, Provider } = createDataContext(
    reducer,
    { addBlogPost, editBlogPost, deleteBlogPost, getBlogPosts },
    []
)

export { Provider }
export default Context
