import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import CustomButton from '../components/Button'

const PostForm = ({ initialValues, onSubmit, buttonTitle, buttonStyle }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return (
        <View style={styles.container}>
            <Text style={styles.labelTitle}>Title</Text>
            <TextInput
                style={styles.input}
                placeholder="Post Title"
                autoCorrect={false}
                autoCapitalize="sentences"
                value={title}
                onChangeText={(v) => setTitle(v)}
            />
            <Text style={styles.labelContent}>Content</Text>
            <TextInput
                style={styles.input}
                placeholder="Post Content"
                autoCorrect={false}
                autoCapitalize="sentences"
                value={content}
                onChangeText={(v) => setContent(v)}
            />

            <CustomButton
                style={[styles.button, buttonStyle]}
                title={buttonTitle}
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

PostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    },
    buttonTitle: 'Submit',
    buttonStyle: {},
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    input: {
        fontSize: 16,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 5,
    },
    labelContent: {
        fontWeight: 'bold',
    },
    labelTitle: {
        fontWeight: 'bold',
    },
})

export default PostForm
