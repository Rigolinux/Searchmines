import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Board from './src/components/Board';
import Cell from './src/components/cell';


export default function App() {
  return (
    <View >
      <Board />
      
    </View>
  );
}

const styles = StyleSheet.create({
  
});
