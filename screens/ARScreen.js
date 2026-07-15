import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ARScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        AR Module Placeholder
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});