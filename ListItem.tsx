import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import {FontAwesome5} from '@expo/vector-icons';

const ListItem = ({item}) => {
    const {nombre, fecha, comentario} = item
  return (
    <View style= {styles.container}>
      <FontAwesome5 style={styles.User} name="user-circle" size={24} color="#657DFA" />
      <Text style={styles.textName}>
      
        {nombre} . 
      <Text style={styles.text}>{fecha}</Text></Text>
      <Text style={styles.text}>{comentario}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2F3C50',
        marginBottom: 10,
        padding: 10,
        marginHorizontal: 10,
        borderBottomWidth: 2,
       borderColor: '#4D596D',
       
    },
    textName:{
      color: '#E2E2E3',
      fontSize: 18,
      left: '10%',
      top: '-20%'
    
    },
    text:{
      color: '#888895',
      fontSize: 16,
      left: '10%',
      marginRight: '8%',
    },
    User: {
      color: '#9AB9C3',
      top: '8%',
      
    },
})

export default ListItem