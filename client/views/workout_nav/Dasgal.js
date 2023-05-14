import React, {useRef} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Exe1 from './athome_pics/exe1.png'

const Dasgal =()=> {
const navigation = useNavigation()
const onPressBack =()=>{
    navigation.goBack()
}
const onPressNext =()=>{
    navigation.navigate('Dasgal1')
}
const onPressSkip =()=>{
    navigation.navigate('Dasgal1')
}
    return(
        <View style={styles.container}>
                  <TouchableOpacity
        style={styles.roundButton1} onPress={onPressBack}>
        <FontAwesome5 name='chevron-left' size={20} color='#7B7576' style={styles.textBig} />
      </TouchableOpacity>
            <Text style={styles.header}>Дасгалууд 1/9</Text>
            <Image source={Exe1} />
            <Text style={styles.text}>Эхлэх</Text>
            <Text style={styles.text2}>Push-Ups</Text>
            <AnimatedCircularProgress
      size={200}
      width={10}
      fill={100}
      tintColor="#42CDD6"
      backgroundColor="#D9D9D9"
      duration={15000} // 15 seconds
    >
    { (fill) => (
    <View>
      <Text style={styles.progressText}>
        {Math.round((fill / 100) * 15)}
      </Text>
    </View>
  )}
    </AnimatedCircularProgress>
    <TouchableOpacity onPress={onPressNext}>
    <FontAwesome5 name="chevron-right" size={40} color="#7B7576"style={styles.next} />
    </TouchableOpacity>
    <Text style={styles.text3}>дараа</Text>
    <TouchableOpacity onPress={onPressSkip}>
    <Text style={styles.text4}>Skipping</Text>
    </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
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
      header: {
        paddingTop:30,
        marginTop:30,
        fontSize:20,
        paddingBottom:50
      },
      text: {
        fontSize:30,
        paddingTop:20,
        color: "#27C6D0"
      },
      text2:{
        fontSize: 20,
        paddingVertical:20,
        paddingBottom:40,
      },
      progressText:{
        fontSize:40,
        color: "#42CDD6"
      },
      next: {
        position:'relative',
        left:150,
        bottom:120
      },
      text3: {
        color:'gray',
        fontSize:20
      },
      text4: {
        fontSize:20,
        paddingVertical:20
      }

})
export default Dasgal