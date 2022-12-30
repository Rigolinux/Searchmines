import * as React from 'react';
import { View,StyleSheet } from 'react-native';

export default function Cell(
    row,
    column,
    isBomb,
    isFlipped,
    value,
) {
    return (
        <View style={styles.conteiner}>

        </View>
    )
}  

const styles = StyleSheet.create({
    conteiner: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'grey'
    },
});