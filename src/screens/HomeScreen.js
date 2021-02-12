import React from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
    const { navigation } = props;

    return (
        <View>
            <Button
                title="Go to Components Demo"
                onPress={() => navigation.navigate('Components')}
            />
            <Button
                title="Go to List Demo"
                onPress={() => navigation.navigate('List')}
            />
            {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
                <Text>Go to List Demo</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
