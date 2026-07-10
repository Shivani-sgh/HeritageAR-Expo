import React, { useEffect, useState } from 'react';

import {
View,
Text,
TouchableOpacity,
StyleSheet,
FlatList,
TextInput,
Button
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

  


  

  <TextInput
    placeholder="Search monument..."
    placeholderTextColor="gray"
    style={styles.search}
    value={search}
    onChangeText={setSearch}
  />

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

        <Text style={styles.cardTitle}>
          {item.title}
        </Text>

        <Text style={styles.cardText}>
          {item.description}
        </Text>

      </TouchableOpacity>

    )}
  />

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
fontSize: 28,
marginBottom: 20,
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
color: '#111',
},

search: {
backgroundColor: '#222',
color: 'white',
padding: 15,
borderRadius: 10,
marginBottom: 20,
},

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

cardText: {
color: 'gray',
marginTop: 8,
},

});
