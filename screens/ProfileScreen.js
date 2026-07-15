import React from 'react';
import {
View,
Text,
StyleSheet
} from 'react-native';

export default function ProfileScreen() {

return ( <View style={styles.container}>


  <Text style={styles.title}>
    My Profile
  </Text>

  <Text style={styles.text}>
    Name: User
  </Text>

  <Text style={styles.text}>
    Role: Student
  </Text>

  <Text style={styles.text}>
    Email: user@gmail.com
  </Text>

</View>


);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:'#111',
padding:20
},

title:{
color:'white',
fontSize:28,
fontWeight:'bold',
marginBottom:20
},

text:{
color:'white',
fontSize:18,
marginBottom:10
}

});
