import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomButton from '../components/CustomButton';

const HomeScreen = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <CustomButton
                title="Go to Components Demo"
                onPress={() => navigation.navigate('Components')}
            />
            <CustomButton
                title="Go to List Demo"
                onPress={() => navigation.navigate('List')}
            />
            <CustomButton
                title="Go to Image Demo"
                onPress={() => navigation.navigate('Image')}
            />
            <CustomButton
                title="Go to Counter Demo"
                onPress={() => navigation.navigate('Counter')}
            />
            <CustomButton
                title="Go to Color Demo"
                onPress={() => navigation.navigate('Color')}
            />
            <CustomButton
                title="Go to Square Demo"
                onPress={() => navigation.navigate('Square')}
            />
            <CustomButton
                title="Go to Text Demo"
                onPress={() => navigation.navigate('Text')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flex: 1,
    },
});

export default HomeScreen;
