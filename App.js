// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Square from './Square';

export default function App() {
  return (
    <View style={styles.container}>
      <Square color="red" label="Square 1" />
      <Square color="green" label="Square 2" />
      <Square color="blue" label="Square 3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
