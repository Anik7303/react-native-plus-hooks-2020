import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomButton from '../components/CustomButton';

const ACTION_TYPES = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE',
};

export default function () {
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case ACTION_TYPES.INCREASE:
                return { ...state, count: state.count + payload };
            case ACTION_TYPES.DECREASE:
                return { ...state, count: state.count - payload };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <View style={styles.container}>
            <CustomButton
                title="Increase"
                onPress={() =>
                    dispatch({ type: ACTION_TYPES.INCREASE, payload: 1 })
                }
            />
            <CustomButton
                title="Decrease"
                onPress={() =>
                    dispatch({ type: ACTION_TYPES.DECREASE, payload: 1 })
                }
            />
            <Text style={styles.text}>Current Count: {state.count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
});
