import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = (
        <Text style={styles.greeting}>Welcome to React Native!</Text>
    );
    return (
        <View>
            {greeting}
            <Text style={styles.text}>Hi There!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    greeting: {
        fontSize: 20,
        textAlign: 'center',
    },
});

export default ComponentsScreen;
