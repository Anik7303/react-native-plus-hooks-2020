import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.container}>
            <Ionicons name="search" style={styles.icon} />
            <TextInput
                style={styles.textInput}
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0eeee',
        height: 40,
        borderRadius: 5,
        margin: 15,
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    icon: {
        fontSize: 24,
        alignSelf: 'center',
        color: '#000',
        marginHorizontal: 10,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});
