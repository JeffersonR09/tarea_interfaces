import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Interfas1 from './interfas1';
import { AntDesign,Ionicons,Octicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.ViewG}>
      <AntDesign 
      style={styles.flecha} 
       name="arrowleft" size={24} color="#fff" 
       />
      <Ionicons 
      style={styles.notification} 
      name="md-notifications-outline" size={24} color="#AEA8B3" 
      />
      <Image 
      style={styles.user0} 
      source={require('./image/user-0.png')} 
      />
      <Octicons
      style={styles.tareas} 
      name="three-bars" size={24} color="#AEA8B3" 
      />
      <Interfas1/>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewG: {
    flex: 1,
    backgroundColor: '#28333F',
    flexDirection: 'row',
    
  },
  flecha:{
    top: 20,
    margin: 10,
    padding: 10,
    position: 'absolute',
    
  },
  notification:{
    top: 20,
    margin: 10,
    padding: 10,
    position: 'absolute',
    right: 88,
    justifyContent:'flex-end',
  },
  user0:{
    top: 26,
    height: 30,
    width: 30,
    padding: 10,
    margin: 10,
    position:'absolute',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 3,
    right: 53,

  },
  tareas:{
    position:'absolute',
    top: 20,
    margin: 10,
    padding: 10,
    right:5,
    justifyContent:'flex-end',
    
  },
});