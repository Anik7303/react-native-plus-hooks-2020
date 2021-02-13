import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

function RestaurentPreview(props) {
    const { id, imageUrl, name, rating, reviewCount, navigation } = props;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('RestaurentDetail', { id })}
        >
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.detail}>
                    {rating} Stars, {reviewCount} Reviews
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginLeft: 15,
    },
    detail: {
        color: '#aaa',
        fontSize: 14,
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 5,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
});

export default withNavigation(RestaurentPreview);
