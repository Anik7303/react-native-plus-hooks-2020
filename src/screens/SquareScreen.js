import React, { useReducer } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const COLOR_CHANGE_BY = 10;
const INITIAL_STATE = {
    red: randomValue(),
    green: randomValue(),
    blue: randomValue(),
};
const ACTION_TYPES = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE',
};

export default function SquareScreen() {
    const reducer = (state, { type, color }) => {
        switch (type) {
            case ACTION_TYPES.INCREASE:
                return state[color] + COLOR_CHANGE_BY > 255
                    ? state
                    : { ...state, [color]: state[color] + COLOR_CHANGE_BY };
            case ACTION_TYPES.DECREASE:
                return state[color] - COLOR_CHANGE_BY < 0
                    ? state
                    : { ...state, [color]: state[color] - COLOR_CHANGE_BY };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const { red, green, blue } = state;

    return (
        <>
            <View style={styles.colorContainer}>
                <ColorCounter
                    color="Red"
                    onIncrease={() =>
                        dispatch({ type: ACTION_TYPES.INCREASE, color: 'red' })
                    }
                    onDecrease={() =>
                        dispatch({ type: ACTION_TYPES.DECREASE, color: 'red' })
                    }
                />
                <ColorCounter
                    color="Green"
                    onIncrease={() =>
                        dispatch({
                            type: ACTION_TYPES.INCREASE,
                            color: 'green',
                        })
                    }
                    onDecrease={() =>
                        dispatch({
                            type: ACTION_TYPES.DECREASE,
                            color: 'green',
                        })
                    }
                />
                <ColorCounter
                    color="Blue"
                    onIncrease={() =>
                        dispatch({ type: ACTION_TYPES.INCREASE, color: 'blue' })
                    }
                    onDecrease={() =>
                        dispatch({ type: ACTION_TYPES.DECREASE, color: 'blue' })
                    }
                />
            </View>
            <View
                style={[
                    styles.colorBox,
                    {
                        backgroundColor: formatColor(red, green, blue),
                    },
                ]}
            />
            <Text style={styles.text}>
                Color: '{formatColor(red, green, blue)}'
            </Text>
        </>
    );
}

function formatColor(red, green, blue) {
    return `rgb(${red}, ${green}, ${blue})`;
}

function randomValue() {
    return Math.floor(Math.random() * 255);
}

const styles = StyleSheet.create({
    colorBox: {
        width: 150,
        height: 150,
        marginVertical: 10,
        alignSelf: 'center',
    },
    colorContainer: {
        margin: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
    },
});
