import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeTab() {
    return (
        <View style={style.container}>
            <Text>HomeTab</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});