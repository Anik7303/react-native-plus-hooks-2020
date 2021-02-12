import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ImageDetail(props) {
    const { title, image, score } = props;
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.score}>{score}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 20,
    },
    details: {
        marginLeft: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '50%',
    },
    score: {
        fontSize: 14,
        color: '#999',
    },
    title: {
        fontSize: 18,
    },
});
