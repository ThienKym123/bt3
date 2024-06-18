// Square.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Square = ({ color, label }) => {
  return (
    <View style={[styles.square, { backgroundColor: color }]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Square;
