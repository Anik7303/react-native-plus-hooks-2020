import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import RestaurentPreview from '../components/RestaurentPreview';

export default function RestaurentList({ title, data }) {
    if (!data) return null;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => (
                    <RestaurentPreview
                        id={item.id}
                        name={item.name}
                        imageUrl={item.image_url}
                        rating={item.rating}
                        reviewCount={item.review_count}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        marginLeft: 15,
    },
    list: {},
});
