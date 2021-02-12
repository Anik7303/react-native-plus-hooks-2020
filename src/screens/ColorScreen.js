import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    const handlePress = () => {
        setColors((value) => [...value, randomRGB()]);
    };

    return (
        <View>
            <CustomButton title="Add a color" onPress={handlePress} />
            <FlatList
                keyExtractor={(color) => color}
                // horizontal
                showsVerticalScrollIndicator={false}
                data={colors}
                renderItem={({ item }) => (
                    <View
                        style={{
                            width: '100%',
                            height: 100,
                            backgroundColor: item,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                backgroundColor: '#000',
                                padding: 5,
                            }}
                        >
                            {item}
                        </Text>
                    </View>
                )}
            />
            {/* {colors.map((color, index) => (
                <View
                    key={`color-${index}`}
                    style={{ width: 100, height: 100, backgroundColor: color }}
                />
            ))} */}
        </View>
    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
