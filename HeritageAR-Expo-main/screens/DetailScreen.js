import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import AskAI from "../components/AskAI";

export default function DetailScreen() {

//   return (
//     <View style={styles.container}>

//       <Text style={styles.title}>
//         Taj Mahal
//       </Text>

//       <Text style={styles.description}>
//         The Taj Mahal was built by Shah Jahan
//         in memory of Mumtaz Mahal.
//       </Text>

//       <TouchableOpacity style={styles.button}>

//         <Text style={styles.buttonText}>
//           Start AR Experience
//         </Text>

//       </TouchableOpacity>

//     </View>
//   );

const [selectedTab, setSelectedTab] = useState("History");
const images = {
  History: require('../assets/images/taj_history.jpg'),

  Architecture: require('../assets/images/taj_architecture.jpg'),

  Art: require('../assets/images/taj_art.jpg'),

  Photography: require('../assets/images/taj_photography.jpg'),

  "Fun Facts": require('../assets/images/taj_funfacts.jpg'),
};
const content = {
  
  History:
    "The Taj Mahal was built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. Construction started in 1632 and finished around 1653.",

  Architecture:
    "The Taj Mahal is an excellent example of Mughal architecture, combining Persian, Islamic and Indian styles. It is made of white marble and features beautiful domes and minarets.",

  Art:
    "The monument contains intricate marble inlay work using precious stones. Floral carvings and Quranic calligraphy decorate the walls.",

  Photography:
    "The best time to capture the Taj Mahal is during sunrise or sunset. The reflection in the water channel creates stunning photographs.",

  "Fun Facts":
    "The Taj Mahal changes its color throughout the day. It looks pink in the morning, white during the day and golden under moonlight."
};

return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >

    <Text style={styles.title}>
      Taj Mahal
    </Text>

    <Image
      source={require('../assets/images/tajmahal.jpg')}
      style={styles.image}
    />

    <TouchableOpacity
style={styles.featureButton}
onPress={() => setSelectedTab("History")}
>
      <Ionicons
        name="cube-outline"
        size={20}
        color="white"
      />

      <Text style={styles.arButtonText}>
        View in AR
      </Text>
    </TouchableOpacity>

    <Text style={styles.guideTitle}>
      AI Heritage Guide
    </Text>

    <Text style={styles.subtitle}>
      Personalized for You (Student)
    </Text>

    <View style={styles.featureRow}>

  <TouchableOpacity
    style={styles.featureButton}
    onPress={() => setSelectedTab("History")}
  >
    <Text style={styles.featureIcon}>📜</Text>
    <Text style={styles.featureText}>History</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.featureButton}
    onPress={() => setSelectedTab("Architecture")}
  >
    <Text style={styles.featureIcon}>🏛️</Text>
    <Text style={styles.featureText}>Architecture</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.featureButton}
    onPress={() => setSelectedTab("Art")}
  >
    <Text style={styles.featureIcon}>🎨</Text>
    <Text style={styles.featureText}>Art</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.featureButton}
    onPress={() => setSelectedTab("Photography")}
  >
    <Text style={styles.featureIcon}>📷</Text>
    <Text style={styles.featureText}>Photography</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.featureButton}
    onPress={() => setSelectedTab("Fun Facts")}
  >
    <Text style={styles.featureIcon}>💡</Text>
    <Text style={styles.featureText}>Fun Facts</Text>
  </TouchableOpacity>

</View>

    <View style={styles.infoCard}>

      <Text style={styles.infoTitle}>
        <Image
  source={images[selectedTab]}
  style={styles.infoImage}
/>
      </Text> 
      <Text style={styles.description}>
{content[selectedTab]}
</Text>

    </View>
    <AskAI
  monument="Taj Mahal"
  section={selectedTab}
/>

  </ScrollView>
  </KeyboardAvoidingView>
);

}

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#111',
//     padding: 20,
//   },

//   title: {
//     color: 'white',
//     fontSize: 32,
//     fontWeight: 'bold',
//   },

//   description: {
//     color: 'gray',
//     marginTop: 20,
//     fontSize: 16,
//     lineHeight: 24,
//   },

//   button: {
//     backgroundColor: '#d4af37',
//     padding: 15,
//     borderRadius: 12,
//     marginTop: 30,
//   },

//   buttonText: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });
const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:'#0A2342',
padding:20,
},

title:{
color:'white',
fontSize:30,
fontWeight:'bold',
marginTop:40,
marginBottom:20,
alignSelf:'center',
},

image:{
width:'100%',
height:230,
borderRadius:20,
},

arButton:{
backgroundColor:'#D4AF37',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
padding:15,
borderRadius:30,
marginTop:20,
},

arButtonText:{
color:'white',
fontWeight:'bold',
fontSize:18,
marginLeft:10,
},

guideTitle:{
color:'white',
fontSize:26,
fontWeight:'bold',
marginTop:30,
},

subtitle:{
color:'#ccc',
fontSize:16,
marginTop:5,
marginBottom:20,
},

featureRow:{
flexDirection:'row',
justifyContent:'space-between',
},

featureButton:{
alignItems:'center',
},

featureIcon:{
fontSize:28,
},

featureText:{
color:'white',
fontSize:12,
marginTop:5,
},

infoCard:{
backgroundColor:'#1A1A1A',
padding:20,
borderRadius:18,
marginTop:30,
marginBottom:30,
},

infoTitle:{
color:'white',
fontSize:24,
fontWeight:'bold',
marginBottom:15,
},

description:{
color:'#ccc',
fontSize:16,
lineHeight:26,
},
infoImage: {
  width: '100%',
  height: 180,
  borderRadius: 15,
  marginBottom: 15,
},

});