import React, { useState } from 'react';
import { StyleSheet, View, Alert, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';
import RestaurentList from '../components/RestaurentList';

export default function SearchScreen() {
    const [term, setTerm] = useState('');
    const [error, data, search] = useSearch();

    const filterByPrice = (len) =>
        data.filter((item) => item.price?.length === len);

    return (
        <View style={styles.container}>
            {error && Alert.alert('Error', error)}
            <SearchBar
                term={term}
                onTermChange={(v) => setTerm(v)}
                onTermSubmit={() => search(term)}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <RestaurentList
                    title="Cost Effective"
                    data={filterByPrice(1)}
                />
                <RestaurentList title="Big Pricier" data={filterByPrice(2)} />
                <RestaurentList title="Big Spender" data={filterByPrice(3)} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
});
