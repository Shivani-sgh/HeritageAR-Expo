// import React from 'react';

// import { createBottomTabNavigator }
// from '@react-navigation/bottom-tabs';

// import HomeScreen from '../screens/HomeScreen';
// import NearbyHeritageScreen from '../screens/NearbyHeritageScreen';
// import ProfileScreen from '../screens/ProfileScreen';

// const Tab =
// createBottomTabNavigator();

// export default function BottomTabs() {

// return (


// <Tab.Navigator>

//   <Tab.Screen
//     name="Home"
//     component={HomeScreen}
//   />

//   <Tab.Screen
//     name="Nearby"
//     component={NearbyHeritageScreen}
//   />

//   <Tab.Screen
//     name="Profile"
//     component={ProfileScreen}
//   />

// </Tab.Navigator>


// );
// }
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import NearbyHeritageScreen from '../screens/NearbyHeritageScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        // tabBarStyle: {
        //   backgroundColor: '#111',
        //   height: 65,
        //   borderTopWidth: 0,
        // },
        tabBarStyle: {
  position: 'absolute',

  left: 15,
  right: 15,
  bottom: 15,

  height: 70,

  backgroundColor: '#111',

  borderTopWidth: 0,

  borderRadius: 20,

  elevation: 10,

  paddingTop: 0,
  paddingBottom: 5,
},
tabBarItemStyle: {
  paddingVertical: 5,
},

tabBarLabelStyle: {
  fontSize: 12,
  marginBottom: 10,
},

        tabBarActiveTintColor: '#D4AF37',
        tabBarInactiveTintColor: 'gray',

        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Nearby') {
            iconName = 'location';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return (
            <Ionicons
              name={iconName}
              size={30}
              color={color}
              style={{ marginTop: -10 }}
            />
          );
        },
      })}
    >
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
