import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SignupScreen from './screens/SignupScreen';
import ARScreen from './screens/ARScreen';
import NearbyHeritageScreen from './screens/NearbyHeritageScreen';
import BottomTabs from './navigation/BottomTabs';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
 name="Main"
 component={BottomTabs}
/>

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />

        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />

        <Stack.Screen
          name="AR"
          component={ARScreen}
        />

        <Stack.Screen
          name="NearbyHeritage"
          component={NearbyHeritageScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}