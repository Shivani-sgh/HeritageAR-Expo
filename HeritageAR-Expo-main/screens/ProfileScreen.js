import React from 'react';
import {
View,
Text,
TouchableOpacity,
StyleSheet,
Image,
Alert,
} from 'react-native';

export default function ProfileScreen() {

// return ( <View style={styles.container}>


//   <Text style={styles.title}>
//     My Profile
//   </Text>

//   <Text style={styles.text}>
//     Name: User
//   </Text>

//   <Text style={styles.text}>
//     Role: Student
//   </Text>

//   <Text style={styles.text}>
//     Email: user@gmail.com
//   </Text>

// </View>


// );
const handleLogout = () => {
  Alert.alert(
    "Logout",
    "You have been logged out successfully!"
  );
};
return (
  <View style={styles.container}>

    <Image
      source={require('../assets/images/profile.png')}
      style={styles.profileImage}
    />

    <Text style={styles.name}>
      your name
    </Text>

    <Text style={styles.role}>
      Heritage Explorer
    </Text>

    <Text style={styles.quote}>
      "Exploring India's Heritage One Monument at a Time"
    </Text>

    <View style={styles.infoCard}>
      <Text style={styles.label}>📧 Email</Text>
      <Text style={styles.value}>user@gmail.com</Text>
    </View>

    <View style={styles.infoCard}>
      <Text style={styles.label}>🎓 Role</Text>
      <Text style={styles.value}>Student</Text>
    </View>

    <View style={styles.infoCard}>
      <Text style={styles.label}>📍 Country</Text>
      <Text style={styles.value}>India</Text>
    </View>
    <TouchableOpacity
  style={styles.logoutButton}
  onPress={handleLogout}
>
  <Text style={styles.logoutText}>
    Logout
  </Text>
</TouchableOpacity>

  </View>
);
}

// const styles = StyleSheet.create({
//   profileImage: {
//   width: 120,
//   height: 120,
//   borderRadius: 60,
//   alignSelf: 'center',
//   marginTop: 50,
//   marginBottom: 20,
// },

// container:{
// flex:1,
// backgroundColor:'#111',
// padding:20
// },

// title:{
// color:'white',
// fontSize:28,
// fontWeight:'bold',
// marginBottom:20
// },

// text:{
// color:'white',
// fontSize:18,
// marginBottom:10
// }

// });
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0B1E3C',
    padding: 20,
    alignItems: 'center',
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginTop: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#D4AF37',
  },

  name: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },

  role: {
    color: '#D4AF37',
    fontSize: 18,
    marginTop: 5,
  },

  quote: {
    color: '#CCCCCC',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 20,
  },

  infoCard: {
    width: '100%',
    backgroundColor: '#1A2B45',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },

  label: {
    color: '#D4AF37',
    fontSize: 15,
    fontWeight: 'bold',
  },

  value: {
    color: 'white',
    fontSize: 18,
    marginTop: 5,
  },
  logoutButton: {
  marginTop: 30,
  backgroundColor: '#D9534F',
  width: '100%',
  paddingVertical: 15,
  borderRadius: 15,
  alignItems: 'center',
},

logoutText: {
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: 'bold',
},

});