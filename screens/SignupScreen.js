import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  setDoc,
} from 'firebase/firestore';

import app from '../firebaseConfig';

const auth = getAuth(app);
const db = getFirestore(app);

export default function SignupScreen({ navigation }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Tourist');

  const handleSignup = async () => {

    try {

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const handleSignup = async () => {
  try {
    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

    console.log("User created!");

    try {
      await setDoc(
        doc(db, 'users', userCredential.user.uid),
        {
          name,
          email,
          role,
        }
      );
      console.log("Firestore document saved!");
    } catch (firestoreError) {
      console.log(
        "Firestore Error:",
        firestoreError.code,
        firestoreError.message
      );
    }

    Alert.alert("Success", "Account Created Successfully");
    navigation.navigate('Login');

  } catch (error) {
    console.log(
      "Auth Error:",
      error.code,
      error.message
    );
    Alert.alert(error.code, error.message);
  }
};
      Alert.alert('Account Created Successfully');

      navigation.navigate('Login');

    } catch (error) {
  console.log("Code:", error.code);
  console.log("Message:", error.message);
  Alert.alert(
    "Error",
    `Code: ${error.code}\nMessage: ${error.message}`
  );
}
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Create Account
      </Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="gray"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

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

      <View style={styles.pickerContainer}>

        <Picker
          selectedValue={role}
          onValueChange={(itemValue) =>
            setRole(itemValue)
          }
        >
          <Picker.Item
            label="Tourist"
            value="Tourist"
          />

          <Picker.Item
            label="Student"
            value="Student"
          />

          <Picker.Item
            label="Researcher"
            value="Researcher"
          />

          <Picker.Item
            label="Child"
            value="Child"
          />
        </Picker>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
      >
        <Text style={styles.buttonText}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Login')
        }
      >
        <Text style={styles.loginText}>
          Already have an account? Login
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
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#222',
    color: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  pickerContainer: {
    backgroundColor: '#222',
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
    color: '#111',
  },

  loginText: {
    color: '#d4af37',
    textAlign: 'center',
    marginTop: 20,
  },

});