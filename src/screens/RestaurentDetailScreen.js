import React from 'react';
import { StyleSheet, FlatList, Image, Alert } from 'react-native';

import useRestaurentDetail from '../hooks/useRestaurentDetail';

export default function RestaurentDetail({ navigation }) {
    const id = navigation.getParam('id');
    const [error, data] = useRestaurentDetail(id);

    if (!data) return null;

    return (
        <>
            {error && Alert.alert('Error', error)}
            <FlatList
                style={styles.container}
                data={data.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => (
                    <Image style={styles.image} source={{ uri: item }} />
                )}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 400,
    },
});
