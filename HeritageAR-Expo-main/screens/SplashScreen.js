import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HeritageAR</Text>

      <Text style={styles.subtitle}>
        Explore History Through AR
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

  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
  },

  subtitle: {
    color: 'gray',
    marginTop: 10,
  },
});