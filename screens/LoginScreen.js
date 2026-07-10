import React, { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { getAuth } from "firebase/auth";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import app from '../firebaseConfig';

const auth = getAuth(app);

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('Main');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>HeritageAR Login</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.signupText}>
          Create Account
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#111',
  },

  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#222',
    color: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#d4af37',
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  signupText: {
    color: '#d4af37',
    marginTop: 20,
    textAlign: 'center',
  },
});
