import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ShadowPropTypesIOS,
} from 'react-native';

export default function TextScreen() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <Text style={styles.text}>Your name is {name}</Text>
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(value) => setPassword(value)}
            />
            {password.length < 4 && (
                <Text>Password must be atleast 4 characters long</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 16,
        padding: 5,
    },
    label: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
    },
});
