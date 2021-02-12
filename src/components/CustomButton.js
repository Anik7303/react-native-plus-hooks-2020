import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const CustomButton = ({ title, onPress }) => (
    <View style={styles.container}>
        <Button title={title} onPress={onPress} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
    },
});

export default CustomButton;
