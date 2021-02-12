import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from './CustomButton';

export default function ColorCounter({ color, onIncrease, onDecrease }) {
    return (
        <View style={styles.container}>
            <CustomButton title={`Increase ${color}`} onPress={onIncrease} />
            <CustomButton title={`Decrease ${color}`} onPress={onDecrease} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderColor: '#000',
        borderWidth: 2,
        paddingHorizontal: 5,
    },
});
