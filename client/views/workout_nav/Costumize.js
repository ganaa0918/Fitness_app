import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet,TouchableOpacity, Image,ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient'

import Costumizeimg from './athome_pics/costumize.png'


function Costumize() {
    const navigation = useNavigation();
    const Goback = () => {
      navigation.goBack();
    }

    const backgroundColor = '#000';
  return (
    <View style={[styles.container,{backgroundColor}]}>
        <ScrollView style={styles.contentContainer}>
            <View style={styles.header}>
        <Image source={Costumizeimg} style={styles.image} />
        <Text style={styles.bigText}>Гэрийн{"\n"}дасгал бүтээх</Text>
        <Text style={styles.smallText}>Өөрийгөө бүтээ</Text>


        </View>
        <TouchableOpacity
        style={styles.roundButton1} onPress={Goback}>
        <FontAwesome5 name='chevron-left' size={20} color='#7B7576' style={styles.textBig} />
      </TouchableOpacity>
      <Text style={styles.text1}>ss</Text>
      <LinearGradient
        colors={['#5625E3', '#9959D9']}
        style={styles.gradient}
        start={{ x: 0.6, y: 1 }}
        end={{ x: 0, y: 1 }}
        locations={[0,1]}
      >
        <Text style={styles.text}>Hello, world!</Text>
      </LinearGradient>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'flex-start',
    alignItems: "center",
    },
    roundButton1: {
    position: "absolute",
    width: 40,
    height: 40,
    left: 10,
    top: 50,
    borderColor: '#CFCFCF',
    borderRadius: 10,
    backgroundColor: "#FFFF"
  },
  textBig: {
    alignSelf: 'center',
    position: 'absolute',
    paddingTop: 10,
    fontSize:20,
  },
  image:{
    top:75,
    height:200
  },
  text1:{
    color:'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    fontSize: 20,

  },
  header:{
    position:'relative',
    width:'100%',
    height:400
  },
  bigText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    position:'absolute',
    left: 10,
    top:130
  },
  smallText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  listitem:{
    marginTop:10,
    padding:20,
    alignItems:'center',
    backgroundColor: "#fff",
    width: "100%"
  },
  listItemText:{
    fontSize:18
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  metaInfo: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    width: 200,
    padding: 10
  },
  gradient: {
    justifyContent: 'center',
    width: 300,
    height: 50,
    alignItems: 'center',
    position:'relative',
    left: 50,
    borderRadius: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
})
export default Costumize