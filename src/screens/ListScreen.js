import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default function ListScreen() {
    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 20 },
        { name: 'Friend #3', age: 20 },
        { name: 'Friend #4', age: 20 },
        { name: 'Friend #5', age: 20 },
        { name: 'Friend #6', age: 20 },
        { name: 'Friend #7', age: 20 },
        { name: 'Friend #8', age: 20 },
        { name: 'Friend #9', age: 20 },
    ];
    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            data={friends}
            keyExtractor={(friend) => friend.name}
            renderItem={({ item }) => (
                <Text style={styles.text}>
                    {item.name} - Age {item.age}
                </Text>
            )}
        />
    );
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 20,
    },
});
