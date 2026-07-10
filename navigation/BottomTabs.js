import React from 'react';

import { createBottomTabNavigator }
from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import NearbyHeritageScreen from '../screens/NearbyHeritageScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab =
createBottomTabNavigator();

export default function BottomTabs() {

return (


<Tab.Navigator>

  <Tab.Screen
    name="Home"
    component={HomeScreen}
  />

  <Tab.Screen
    name="Nearby"
    component={NearbyHeritageScreen}
  />

  <Tab.Screen
    name="Profile"
    component={ProfileScreen}
  />

</Tab.Navigator>


);
}
