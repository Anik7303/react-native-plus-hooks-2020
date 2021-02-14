import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconButton = ({ Icon, name, onPress, style }) => {
    const Component = Icon ? Icon : Feather
    return (
        <TouchableOpacity onPress={onPress}>
            <Component name={name} style={[styles.icon, style]} />
        </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({
    icon: {
        color: '#000',
        fontSize: 24,
        margin: 10,
    },
})
