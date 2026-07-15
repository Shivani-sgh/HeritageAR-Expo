import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DetailScreen() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Taj Mahal
      </Text>

      <Text style={styles.description}>
        The Taj Mahal was built by Shah Jahan
        in memory of Mumtaz Mahal.
      </Text>

      <TouchableOpacity style={styles.button}>

        <Text style={styles.buttonText}>
          Start AR Experience
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },

  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },

  description: {
    color: 'gray',
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    backgroundColor: '#d4af37',
    padding: 15,
    borderRadius: 12,
    marginTop: 30,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});