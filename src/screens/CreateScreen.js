import React, { useContext } from 'react'

import Context from '../contexts/BlogContext'
import PostForm from '../components/PostForm'

const CreateScreen = ({ navigation }) => {
    const { boundActions } = useContext(Context)

    const handleSubmit = (title, content) => {
        boundActions.addBlogPost(title, content, () =>
            navigation.navigate('Index')
        )
    }

    return <PostForm onSubmit={handleSubmit} buttonTitle="Save" />
}

CreateScreen.navigationOptions = () => {
    return {
        title: 'Create',
    }
}

export default CreateScreen
