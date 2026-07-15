import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

// import {
// View,
// Text,
// TouchableOpacity,
// StyleSheet,
// FlatList,
// TextInput,
// Button
// } from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Image
} from 'react-native';

import {
getFirestore,
collection,
getDocs,
} from 'firebase/firestore';

import app from '../firebaseConfig';

const db = getFirestore(app);

export default function HomeScreen({ navigation }) {

const [monuments, setMonuments] = useState([]);
const [search, setSearch] = useState('');

useEffect(() => {
fetchMonuments();
}, []);

const fetchMonuments = async () => {


const querySnapshot = await getDocs(
  collection(db, 'monuments')
);

const data = [];

querySnapshot.forEach(doc => {
  data.push({
    id: doc.id,
    ...doc.data(),
  });
});

setMonuments(data);


};

const filteredMonuments = monuments.filter(item =>
item.title.toLowerCase().includes(search.toLowerCase())
);

return ( <View style={styles.container}>


  <Text style={styles.title}>
    Heritage Sites
  </Text>

  


  

  {/* /* <TextInput
    placeholder="Search monument..."
    placeholderTextColor="gray"
    style={styles.search}
    value={search}
    onChangeText={setSearch}
  /> */ }
  <View style={styles.searchContainer}>
  <Ionicons
    name="search"
    size={22}
    color="#888"
    style={styles.searchIcon}
  />

  <TextInput
    placeholder="Search monument..."
    placeholderTextColor="#888"
    style={styles.search}
    value={search}
    onChangeText={setSearch}
  />
</View>

  <FlatList
    data={filteredMonuments}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('Detail', {
            monument: item,
          })
        }
      >

        {/* <Text style={styles.cardTitle}>
          {item.title}
        </Text>

        <Text style={styles.cardText}>
          {item.description}
        </Text> */}
        <View style={styles.cardHeader}>

<Image
  source={
    item.title === 'Taj Mahal'
      ? require('../assets/images/tajmahal.jpg')
      : item.title === 'Qutub Minar'
      ? require('../assets/images/qutub.jpg')
      : item.title === 'Red Fort'
      ? require('../assets/images/redfort.jpg')
      : item.title === 'India Gate'
      ? require('../assets/images/indiagate.jpg')
      : require('../assets/images/tajmahal.jpg') // default image
  }
  style={styles.monumentImage}
/>

<View style={{flex:1, marginLeft:15}}>

<Text style={styles.cardTitle}>
  {item.title}
</Text>

<Text style={styles.cardText}>
  {item.description}
</Text>

</View>

</View>

      </TouchableOpacity>

    )}
  />

</View>


);
}

const styles = StyleSheet.create({
  searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#222',
  borderRadius: 15,
  paddingHorizontal: 15,
  marginBottom: 20,
  elevation: 5,
},

searchIcon: {
  marginRight: 10,
},

search: {
  flex: 1,
  fontSize: 16,
  color: 'white',
  paddingVertical: 15,
},
  cardHeader: {
  flexDirection: 'row',
  alignItems: 'center',
},

monumentImage: {
  width: 90,
  height: 90,
  borderRadius: 12,
},

cardText: {
  color: 'gray',
  marginTop: 8,
},

container: {
  flex: 1,
  backgroundColor: '#0b1e3c',
  padding: 20,
},

title: {
color: 'white',
fontSize: 36,
marginBottom: 20,
marginTop:60,
fontWeight: 'bold',
},

button: {
backgroundColor: '#d4af37',
padding: 15,
borderRadius: 10,
marginTop: 15,
marginBottom: 15,
},

buttonText: {
textAlign: 'center',
fontWeight: 'bold',
color: '#262424',
},

// search: {
// backgroundColor: '#241818',
// color: 'white',
// padding: 15,
// borderRadius: 10,
// marginBottom: 20,
// },

card: {
backgroundColor: '#222',
padding: 20,
borderRadius: 15,
marginBottom: 15,
},

cardTitle: {
color: 'white',
fontSize: 22,
fontWeight: 'bold',
},

// cardText: {
// color: 'gray',
// marginTop: 8,
// },

});
