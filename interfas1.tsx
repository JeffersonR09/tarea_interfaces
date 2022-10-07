import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign,FontAwesome5,MaterialCommunityIcons, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';

export default function Interfas1() {
  return (
    <View style= {styles.container}>
        <FontAwesome5 style={styles.user} name="user-circle" size={24} color="#657DFA" />
        <TextInput
        style={styles.input}
        placeholder="Add a Comment...">
        </TextInput>
          <TouchableOpacity style={styles.bottomInput1}>
              <View>
              <Entypo style={styles.emoji1} name="emoji-happy" size={24} color="#657DFA" />
              </View>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.bottomInput2}>
            <View>
            <Ionicons style={styles.emoji1} name="send-outline" size={24} color="#fff" />
            </View>
          </TouchableOpacity> 
      <View style={styles.footer}>
      <MaterialCommunityIcons style={styles.footerIcon} name="home-variant" size={25} color="#AEA8B3" />
      <MaterialCommunityIcons style={styles.footerIcon} name="text-box" size={24} color="#AEA8B3" />
      <FontAwesome5 style={styles.footerIcon3} name="book-open" size={22} color="#AEA8B3" />
      <FontAwesome5 style={styles.footerIcon4} name="user-friends" size={22} color="#677FFF" />
      <MaterialIcons style={styles.footerIcon} name="bookmark" size={24} color="#AEA8B3" />
      </View>

    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        top: 90,
        backgroundColor: '#2F3C50',
        borderRadius: 25,
        
        
    },
    user:{
        margin: 17,
        padding: 8,
        borderRadius: 10,
        borderColor: '#4D596D',

    },
    input:{
        flex: 1,
        backgroundColor: '#4B576B',
        top: 15,
        width: 280,
        height: 40,
        margin: 5,
        padding: 8,
        position: 'absolute',
        right:5,
        justifyContent:'flex-end',
        borderRadius: 10,
        color:'#fff',
    },
    bottomInput1:{
      flex: 1,
      position: 'absolute',
      height: 33,
      width: 33,
      top: 23,
      left: 260,
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 3,
      backgroundColor: '#2F3C50',
    },
    emoji1:{
      justifyContent: 'center',
      margin: 4,
    },
    textEncabezados:{
        color: '#fff',
    },
    bottomInput2:{
      flex: 1,
      position: 'absolute',
      height: 33,
      width: 33,
      top: 23,
      left: 300,
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 3,
      backgroundColor: '#677FFF',
    },
    footer:{
        flex: 1,
        position: 'absolute',
        top: 480,
        backgroundColor: '#293441',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 2,
        borderColor: '#4D596D',
        
        
        
    },
    footerIcon:{
      flex: 1,
      margin: 10,
      padding: 10,
      alignContent: 'space-around',
      alignItems: 'flex-start',
      
    },
    footerIcon3:{
      flex: 1,
      margin: 10,
      padding: 10,
      alignContent: 'space-around',
      alignItems: 'flex-start',
      borderBottomWidth: 4,
      borderColor: '#4D596D',
      
    },
    footerIcon4:{
      flex: 1,
      margin: 10,
      padding: 10,
      alignContent: 'space-around',
      alignItems: 'flex-start',
      borderTopWidth: 3,
      borderColor: '#677FFF',
      
    },
    
})