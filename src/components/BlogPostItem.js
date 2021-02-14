import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import IconButton from './IconButton'

const BlogPostItem = ({ title, onPress, onDelete }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <IconButton name="trash-2" onPress={onDelete} />
            </View>
        </TouchableOpacity>
    )
}

export default BlogPostItem

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        flex: 1,
        paddingVertical: 10,
    },
})
