import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import img from '../../assets/profile.png'
import {  useContext} from 'react'
import  { UserContext }  from "../UsersContext";

const Info = () => {
    const { user } = useContext(UserContext)
    const navigation = useNavigation();
const Goback = () => {
    navigation.goBack();
  }
    return(
    <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.container}>
            <TouchableOpacity
                style={styles.roundButton1} 
                onPress={Goback}>
            <FontAwesome5 name='chevron-left' size={20} color='#7B7576' style={styles.textBig} />
            </TouchableOpacity>
            <View style={styles.back}>
                <Image source={img} style={styles.image} />
            </View>
            <Text style={styles.Profilename}>{user.ner}</Text>
            <View style={styles.intro}>
                <View style={styles.between}>
                    <Text style={styles.text1}>{user.undur}</Text>
                    <Text>Өндөр</Text>
                </View>
                <View style={styles.between}>
                    <Text style={styles.text1}>{user.jin}</Text>
                    <Text>Жин</Text>
                </View>
                <View style={styles.between}>
                    <Text style={styles.text1}>22</Text>
                    <Text>Нас</Text>
                </View>
            </View>
            <View style={styles.Msg}>
                <View style={styles.textuud}>
                <Text style={styles.text6}>Имейл</Text>
                <Text style={{color: "gray"}}>{user.email}</Text>
                </View>
            </View>
            <View style={styles.Msg1}>
                <View style={styles.textuud}>
                <Text style={styles.text6}>Утасны дугаар</Text>
                <Text style={{color: "gray"}}>{user.phone}</Text>
                </View>
            </View>
            <View style={styles.Msg2}>
                <View style={styles.textuud}>
                <Text style={styles.text6}>Нууц үг</Text>
                <Text style={{color: "gray"}}>********</Text>
                </View>
            </View>
          </View>
          </ScrollView>
    )
}
const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 100,
      },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: '#fff',
      },
      roundButton1: {
        position: "absolute",
        width: 50,
        height: 50,
        left: 10,
        top: 50,
        borderColor: '#CFCFCF',
        borderRadius: 10,
        backgroundColor: "#FFFF"
      },
      textBig: {
        alignSelf: 'center',
        position: 'absolute',
        paddingTop: 15,
      },
      back: {
        backgroundColor:"#B9B5EC",
        borderRadius: 80,
        position:"relative",
        width:150,
        height:150,
        top:100,
      },
      image: {
        width:150,
        height:150
      },
      Profilename: {
        paddingTop:120,
        fontSize: 20
      },
      intro: {
        flexDirection: 'row',
        justifyContent:'space-between',
      },
      between: {
        margin: 20,
        height: 70,
        width: 70,
        shadowColor:"#000",
      },
      text1: {
        color: "#92A5FD",
        fontSize:15,
      },
      Msg:{
        position:"relative",
        backgroundColor:"#FFFFFF",
        width: 350,
        height: 75,
        shadowColor:"#000",
        shadowOffset:{ width:5, height:3},
        ShadowOpacity: 0.5,
        shadowRadius:20,
        elevation: 5,
      },
      Msg1:{
        position:"relative",
        backgroundColor:"#FFFFFF",
        width: 350,
        height: 75,
        top:20,
        shadowColor:"#000",
        shadowOffset:{ width:5, height:3},
        ShadowOpacity: 0.5,
        shadowRadius:20,
        elevation: 5,
      },
      Msg2:{
        position:"relative",
        backgroundColor:"#FFFFFF",
        width: 350,
        height: 75,
        top:40,
        shadowColor:"#000",
        shadowOffset:{ width:5, height:3},
        ShadowOpacity: 0.5,
        shadowRadius:20,
        elevation: 5,
      },
      Msg3:{
        position:"relative",
        backgroundColor:"#FFFFFF",
        width: 350,
        height: 75,
        top:60,
        shadowColor:"#000",
        shadowOffset:{ width:5, height:3},
        ShadowOpacity: 0.5,
        shadowRadius:20,
        elevation: 5,
      },
      textuud: {
        padding:20
      }
})
export default Info