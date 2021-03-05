import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

import Spacer from './Spacer'

const NavLink = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Spacer>
                <Text style={styles.text}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {},
    text: {
        color: 'dodgerblue',
        fontSize: 18,
        textAlign: 'center',
    },
})

export default NavLink
