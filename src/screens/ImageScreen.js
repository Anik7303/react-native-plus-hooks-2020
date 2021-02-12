import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ImageDetail from '../components/ImageDetail';

export default function ImageScreen() {
    const list = [
        {
            title: 'Forest',
            image: require('../../assets/forest.jpg'),
            score: 8,
        },
        { title: 'Beach', image: require('../../assets/beach.jpg'), score: 7 },
        {
            title: 'Mountain',
            image: require('../../assets/mountain.jpg'),
            score: 5,
        },
    ];
    return (
        <FlatList
            keyExtractor={(item) => item.title}
            data={list}
            renderItem={({ item }) => (
                <ImageDetail
                    {...item}
                    // title={item.title}
                    // image={item.image}
                    // score={item.score}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({});
