import React, { useContext } from 'react'

import Context from '../contexts/BlogContext'
import PostForm from '../components/PostForm'

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state, boundActions } = useContext(Context)
    const { title, content } = state.find((post) => post.id === id)

    const handleSubmit = (title, content) => {
        boundActions.editBlogPost(id, title, content, () => {
            // navigation.navigate('Index')
            navigation.pop()
        })
    }

    return (
        <PostForm
            onSubmit={handleSubmit}
            initialValues={{ title, content }}
            buttonTitle="Update"
        />
    )
}

EditScreen.navigationOptions = () => {
    return {
        title: 'Edit',
    }
}

export default EditScreen
