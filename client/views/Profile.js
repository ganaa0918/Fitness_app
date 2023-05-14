import React, {useState, useContext} from "react";
import {View, Text, StyleSheet,Image, TouchableOpacity,ScrollView} from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import Toggle from 'react-native-toggle-input'
import img from '../assets/profile.png'
import  { UserContext }  from "./UsersContext";
export default function Profile({navigation}) {
  const [toggle, setToggle] = useState(false);
  const { user } = useContext(UserContext)
  const toggleColor = toggle ? '#4C956C' : '#DB4437';
  const onPressinfo = () =>{
    navigation.navigate("Info")
  }
  const onPressHistory = () =>{
    navigation.navigate("History")
  }
  const onPressPro = () =>{
    navigation.navigate("Order")
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

    <View style={styles.container}>
    <View style={styles.Alignbetween2}>
        <View style={{ flexDirection: 'column', marginLeft: 20, marginTop:10 }}>
          <Text style={styles.text4}>{user}</Text>
          <Text style={styles.text3}>Lose a Fat Program</Text>
        </View>
        <View style={styles.back}>
          <Image source={img} style={styles.image} />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPressPro}>
        <Text style={styles.textvip}>Pro хэрэглэгч болох</Text>
      </TouchableOpacity>
      <Text style={styles.account}>Аккоунт</Text>
      <View style={styles.acccontainer}>
        <View style={styles.Alignbetween3}>
            <FontAwesome5 name='user' size={20} color='#92A5FD' style={{paddingTop:5}} solid/>
              <Text style={styles.text5}>Хувийн мэдээлэл</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <TouchableOpacity style={styles.ooo} onPress={onPressinfo}>
              <FontAwesome5 name='chevron-right' size={20} color='gray' solid/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Alignbetween3}>
            <FontAwesome5 name='file-invoice' size={20} color='#92A5FD' style={{paddingTop:5}} solid/>
              <Text style={styles.text5}>Хэрэглэгчийн календарь</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <TouchableOpacity style={styles.ooo}>
              <FontAwesome5 name='chevron-right' size={20} color='gray' solid/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Alignbetween3}>
            <FontAwesome5 name='chart-pie' size={20} color='#92A5FD' style={{paddingTop:5}} solid/>
              <Text style={styles.text5}>Дасгалын түүх</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <TouchableOpacity style={styles.ooo} onPress={onPressHistory}>
              <FontAwesome5 name='chevron-right' size={20} color='gray' solid/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Alignbetween3}>
            <FontAwesome5 name='chart-bar' size={20} color='#92A5FD' style={{paddingTop:5}} solid/>
              <Text style={styles.text5}>Миний дасгалын төлөвлгөө</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <TouchableOpacity style={styles.ooo}>
              <FontAwesome5 name='chevron-right' size={20} color='gray' solid/>
              </TouchableOpacity>
            </View>
          </View>
      </View>
      <View style={styles.Msg}>
        <Text style={styles.text6}>Мэдэгдэл</Text>
        <View style={styles.Alignbetween4}>
            <FontAwesome5 name='bell' size={20} color='#92A5FD' style={{paddingTop:0}} solid/>
              <Text style={styles.text5} >Мэдэгдэл ирэх</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Toggle toggle={toggle} size={20} color={"#92A5FD"} filled={true} circleColor={"white"} setToggle={setToggle} />
            </View>
          </View>
      </View>
      <View style={styles.Other}>
        <Text style={styles.text6}>Бусад</Text>
        <View style={styles.Alignbetween4}>
            <FontAwesome5 name='envelope' size={20} color='#92A5FD' style={{paddingTop:0}} solid/>
              <Text style={styles.text5} >Бидэнтэй холбогдох</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity style={styles.ooo}>
              <FontAwesome5 name='chevron-right' size={20} color='gray' solid/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Alignbetween4}>
            <FontAwesome5 name='user-secret' size={20} color='#92A5FD' style={{paddingTop:0}} solid/>
              <Text style={styles.text5} >Нууцлал</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity style={styles.ooo}>
              <FontAwesome5 name='chevron-right' size={20} color='gray' solid/>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </View>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
    backgroundColor:"white"
  },
  Alignbetween2: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    paddingVertical: 20,
    justifyContent:'space-between'
  },
  Alignbetween2: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    paddingVertical: 20,
  },
  image: {
    width:75,
    height:75
  },
  text4: {
    fontSize: 20,
  },
  text3: {
    fontSize: 16,
    color: "gray",
  },
  back: {
    backgroundColor:"#B9B5EC",
    borderRadius: 60,
    position:"relative",
    width:75,
    height:75,
    left:100
  },
  button: {
    width:250,
    height:50,
    backgroundColor:"#FFF500",
    borderRadius: 20,
    alignItems: "center",
    position: "relative",
    paddingTop:20
  },
  textvip:{
    position: "absolute",
    marginTop:15,
    color: "#7B6F72"
  },
  account:{
    right:120,
    fontSize:20,
    paddingVertical:20
  },
  ooo :{
    right:20
  },
  text5:{
    color: "#7B6F72",
    paddingHorizontal:20
  },
  Alignbetween3: {
    position:'relative',
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    paddingVertical: 10,
  },
  Alignbetween4: {
    position:'relative',
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    paddingVertical: 10,
  },
  acccontainer: {
    position:'relative',
    backgroundColor:"#FFF",
    width:350,
    height:200,
    shadowColor:"#000",
    shadowOffset:{ width:5, height:3},
    ShadowOpacity: 0.5,
    shadowRadius:20,
    elevation: 5,
  },
  Msg:{
    position:"relative",
    backgroundColor:"#FFFFFF",
    top:20,
    width: 350,
    height: 75,
    shadowColor:"#000",
    shadowOffset:{ width:5, height:3},
    ShadowOpacity: 0.5,
    shadowRadius:20,
    elevation: 5
  },
  text6: {
    left:20,
    fontSize:20
  },
  Other:{
    position:"relative",
    backgroundColor:"#FFFFFF",
    top: 60,
    width: 350,
    height: 120,
    shadowColor:"#000",
    shadowOffset:{ width:5, height:3},
    ShadowOpacity: 0.5,
    shadowRadius:20,
    elevation: 5
  },
})