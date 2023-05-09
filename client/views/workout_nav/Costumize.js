import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet,TouchableOpacity, Image,ScrollView, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient'
import Dasgal2 from '../workout_nav/athome_pics/dasgal2.png';
import Dasgal3 from '../workout_nav/athome_pics/dasgal3.png';
import Dasgal4 from '../workout_nav/athome_pics/dasgal4.png';
import Dasgal5 from '../workout_nav/athome_pics/dasgal5.png';
import Vector from '../workout_nav/athome_pics/Vector.png';


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
        <TouchableOpacity
        style={styles.roundButton1} onPress={Goback}>
        <FontAwesome5 name='chevron-left' size={20} color='#7B7576' style={styles.textBig} />
      </TouchableOpacity>
            <View style={styles.header}>
        <Image source={Costumizeimg} style={styles.image} />
        <Text style={styles.bigText}>Гэрийн{"\n"}дасгал бүтээх</Text>
        <Text style={styles.smallText}>Өөрийгөө бүтээ</Text>
        </View>


      <TextInput style={{backgroundColor:'white', marginHorizontal:20, borderRadius:20, height:25}}></TextInput>
      <View style={styles.Alignbetween2}>
        <Image source={Vector} />
        <View style={{ flexDirection: 'column', marginLeft:20 }}>
          <Text style={styles.text4}>Push-Ups</Text>
          <Text style={styles.text3}>15x</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
          style={styles.roundButton2}>
          <FontAwesome5 name='circle' size={20} color='#7B7576'/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Alignbetween2}>
        <Image source={Dasgal2} />
        <View style={{ flexDirection: 'column', marginLeft:20 }}>
          <Text style={styles.text4}>Skipping</Text>
          <Text style={styles.text3}>15x</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
          style={styles.roundButton2}>
          <FontAwesome5 name='circle' size={20} color='#7B7576'/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Alignbetween2}>
        <Image source={Dasgal3} />
        <View style={{ flexDirection: 'column', marginLeft:20 }}>
          <Text style={styles.text4}>Skipping</Text>
          <Text style={styles.text3}>15x</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
          style={styles.roundButton2}>
          <FontAwesome5 name='circle' size={20} color='#7B7576'/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Alignbetween2}>
        <Image source={Dasgal4} />
        <View style={{ flexDirection: 'column', marginLeft:20 }}>
          <Text style={styles.text4}>Skipping</Text>
          <Text style={styles.text3}>15x</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
          style={styles.roundButton2}>
          <FontAwesome5 name='circle' size={20} color='#7B7576'/>
          </TouchableOpacity>
        </View>
      </View>
      <LinearGradient
        colors={['#5625E3', '#9959D9']}
        style={styles.gradient}
        start={{ x: 0.6, y: 1 }}
        end={{ x: 0, y: 1 }}
        locations={[0,1]}
      >
        <Text style={styles.text}>Эхлэх</Text>
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
    top:120,
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
    top:170
  },
  smallText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    paddingLeft: 10,
    paddingBottom: 20,
    top:30
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
  Alignbetween2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    paddingVertical: 20,
  },
  roundButton2: {
    position: 'relative',
    width: 30,
    height: 30,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth:1,
    alignItems: 'center',
  },
  text4:{
    color: 'white',
  },
  text3:{
    color: 'white',
  }
})
export default Costumize