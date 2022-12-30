import * as React from 'react';
import { View,StyleSheet } from 'react-native';
import Cell from './cell';
import { gameReducer } from './../reducers/gamereducer';
import { createBoard } from './../utils/createBoard';



const BOARD_SIZE = 20;
const BOMBS_NUM = 10;

export default function Board() {

    const [gameState, setGameState] = React.useReducer(gameReducer, {
        board: createBoard(BOARD_SIZE, BOARD_SIZE, BOMBS_NUM),
    })


    return(
        <View>
            {gameState.board.map((row, rowIndex) => {
                <View key={rowIndex} style={styles.row}>
                    {row.map((cell, cellIndex) => (
                        <Cell key={cellIndex} {...cell} />)
                    )}
                </View>
            })}
            
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    }
});