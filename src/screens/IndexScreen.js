import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import Context from '../contexts/BlogContext'
import BlogPostItem from '../components/BlogPostItem'
import IconButton from '../components/IconButton'

const IndexScreen = ({ navigation }) => {
    const { state, boundActions } = useContext(Context)

    useEffect(() => {
        boundActions.getBlogPosts()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(post) => `${post.id}`}
                data={state}
                renderItem={({ item }) => (
                    <BlogPostItem
                        title={item.title}
                        onPress={() =>
                            navigation.navigate('Show', { id: item.id })
                        }
                        onDelete={() => boundActions.deleteBlogPost(item.id)}
                    />
                )}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Blog Posts',
        headerRight: () => (
            <IconButton
                name="plus"
                style={styles.iconCreate}
                onPress={() => navigation.navigate('Create')}
            />
        ),
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    iconCreate: {
        color: 'green',
        fontSize: 32,
        marginRight: 15,
    },
    list: {
        flex: 1,
    },
})

export default IndexScreen
