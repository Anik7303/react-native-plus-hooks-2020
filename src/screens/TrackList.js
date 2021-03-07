import React, { useContext } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'

import { TrackContext } from '../contexts'

const TrackList = ({ navigation }) => {
    const {
        state: { tracks },
        actions,
    } = useContext(TrackContext)

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={() => actions.fetchTracks()} />
            <FlatList
                style={styles.list}
                data={tracks}
                keyExtractor={(track) => track._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('TrackDetails', {
                                _id: item._id,
                                name: item.name,
                            })
                        }
                    >
                        <ListItem key={item._id}>
                            <ListItem.Content>
                                <ListItem.Title style={styles.title}>
                                    {item.name}
                                </ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

TrackList.navigationOptions = {
    title: 'Tracks',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        textTransform: 'capitalize',
    },
})

export default TrackList
