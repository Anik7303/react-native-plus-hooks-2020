import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ExerciseScreen = () => {
    const name = 'Anik';
    return (
        <View>
            <Text style={styles.title}>Getting started with react native</Text>
            <Text style={styles.subTitle}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 45,
    },
    subTitle: {
        fontSize: 20,
        color: 'grey',
    },
});

export default ExerciseScreen;
