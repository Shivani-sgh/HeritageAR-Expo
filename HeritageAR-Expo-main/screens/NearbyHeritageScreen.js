/*import React, { useEffect, useState } from 'react';

import {
View,
Text,
FlatList
} from 'react-native';

import * as Location from 'expo-location';
import axios from 'axios';

export default function NearbyHeritageScreen() {

const [heritageSites, setHeritageSites] = useState([]);

useEffect(() => {
getLocation();
}, []);

const getLocation = async () => {


let { status } =
  await Location.requestForegroundPermissionsAsync();

if (status !== 'granted') {
  console.log('Permission denied');
  return;
}

const location =
  await Location.getCurrentPositionAsync({});

console.log(
  location.coords.latitude
);

console.log(
  location.coords.longitude
);

fetchHeritageSites(
  location.coords.latitude,
  location.coords.longitude
);


};

const fetchHeritageSites = async (
latitude,
longitude
) => {

try {


const query = `


[out:json];
(
node["historic"](around:10000,${latitude},${longitude});
way["historic"](around:10000,${latitude},${longitude});
relation["historic"](around:10000,${latitude},${longitude});
);
out center;
`;


const response = await axios({
  method: 'POST',
  url: 'https://overpass-api.de/api/interpreter',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: query
});

console.log(response.data);

setHeritageSites(
  response.data.elements || []
);


}
catch(error){


console.log(
  "OVERPASS ERROR:",
  error.message
);


}

};


return (


<View style={{ flex: 1, padding: 20 }}>

  <Text
    style={{
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20
    }}
  >
    Nearby Heritage
  </Text>

  <FlatList
    data={heritageSites}
    keyExtractor={(item, index) =>
      index.toString()
    }
    renderItem={({ item }) => (

      <Text
        style={{
          fontSize: 18,
          marginBottom: 10
        }}
      >
        {item.tags?.name ||
          'Unknown Site'}
      </Text>

    )}
  />

</View>


);
}
*/

/*import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

export default function NearbyHeritageScreen() {
  const [heritageSites, setHeritageSites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.log('Permission denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      console.log(location.coords.latitude);
      console.log(location.coords.longitude);

      fetchHeritageSites(
        location.coords.latitude,
        location.coords.longitude
      );
    } catch (err) {
      console.log("LOCATION ERROR:", err.message);
    }
  };

  const fetchHeritageSites = async (latitude, longitude) => {
  try {
    setLoading(true);

    const query = `[out:json];
(
  node["historic"](around:6000,${latitude},${longitude});
  way["historic"](around:6000,${latitude},${longitude});
  relation["historic"](around:6000,${latitude},${longitude});
);
out center;`;

    const response = await fetch(
      'https://overpass.kumi.systems/api/interpreter', // 🔥 CHANGE HERE
      {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: query
      }
    );

    const text = await response.text();

    if (text.startsWith("<")) {
      console.log("Overpass HTML error:", text);
      setHeritageSites([]);
      return;
    }

    const data = JSON.parse(text);

    setHeritageSites(data?.elements || []);
  } catch (error) {
    console.log("ERROR:", error.message);
    setHeritageSites([]);
  } finally {
    setLoading(false);
  }
};

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Nearby Heritage
      </Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={heritageSites || []}
          keyExtractor={(item, index) =>
            item?.id?.toString() || index.toString()
          }
          renderItem={({ item }) => {
            if (!item) return null;

            return (
              <View
                style={{
                  padding: 12,
                  borderBottomWidth: 1,
                  borderColor: '#ddd'
                }}
              >
                <Text style={{ fontSize: 18 }}>
                  {item?.tags?.name || 'Unknown Site'}
                </Text>

                <Text style={{ fontSize: 12, color: 'gray' }}>
                  {item?.tags?.historic ||
                    item?.tags?.tourism ||
                    'Heritage Place'}
                </Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
}
  */

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function NearbyHeritageScreen() {
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocation();
  }, []);

  // 📍 Get user location
  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.log('Permission denied');
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      fetchHeritage(
        location.coords.latitude,
        location.coords.longitude
      );
    } catch (error) {
      console.log("Location error:", error.message);
      setLoading(false);
    }
  };

  // 📏 Distance formula (Haversine)
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (v) => (v * Math.PI) / 180;
    const R = 6371;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  // 🔥 Fetch Firestore data
  const fetchHeritage = async (lat, lon) => {
    try {
      setLoading(true);

      const snapshot = await getDocs(collection(db, "heritage"));

      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      console.log("TOTAL DATA:", data.length);

      // 🛡️ safety filter (important)
      const validData = data.filter(
        item => item.lat != null && item.lon != null
      );

      const result = validData
        .map(item => ({
          ...item,
          distance: getDistance(lat, lon, item.lat, item.lon)
        }))
        .sort((a, b) => a.distance - b.distance);

      console.log("RESULT:", result.length);

      setSites(result);
    } catch (error) {
      console.log("Firebase error:", error.message);
      setSites([]);
    } finally {
      setLoading(false);
    }
  };

  // ⏳ Loading UI
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading nearby heritage sites...</Text>
      </View>
    );
  }

  // 📋 UI
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Nearby Hidden Heritage
      </Text>

      {sites.length === 0 ? (
        <Text>No heritage sites found.</Text>
      ) : (
        <FlatList
          data={sites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ padding: 12, borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>

              <Text style={{ color: 'gray' }}>
                {item.distance.toFixed(2)} km away
              </Text>

              <Text style={{ fontSize: 12 }}>
                {item.type}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}