import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/IconButton'

import Context from '../contexts/BlogContext'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)
    const id = navigation.getParam('id')
    const { title, content } = state.find((post) => post.id === id)

    return (
        <View style={styles.container}>
            <Text style={styles.labelTitle}>Title</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.labelContent}>Content</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    const id = navigation.getParam('id')
    return {
        title: '',
        headerRight: () => (
            <IconButton
                name="edit"
                style={styles.icon}
                onPress={() => navigation.navigate('Edit', { id })}
            />
        ),
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    content: {
        fontSize: 18,
    },
    icon: {
        marginRight: 15,
    },
    labelContent: {
        fontWeight: 'bold',
    },
    labelTitle: {
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
    },
})

export default ShowScreen
