import React, {useState, useEffect, } from "react";
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import squats from './athome_pics/squats.png'


const Rest = () =>{
    const [count, setCount] = useState(30);
    const navigation = useNavigation()
const onPressBack =()=>{
    navigation.goBack()
}
const onPressEnd =()=>{
  navigation.navigate('MainContainer')
}
    useEffect(() => {
        const timer = setInterval(() => {
          if (count > 1) {
            setCount(count => count - 1);
          } else {
            setCount(0);
            clearInterval(timer);
          }
        }, 1000);

        return () => clearInterval(timer);
      }, []);

      const handleAddTime = () => {
        setCount((count) => count + 20);
      };
    return(
        <View style={styles.container}>
                  <TouchableOpacity
        style={styles.roundButton1} onPress={onPressBack}>
        <FontAwesome5 name='chevron-left' size={20} color='#7B7576' style={styles.textBig} />
      </TouchableOpacity>
            <Text style={styles.header}>Амрах</Text>
            <Text style={styles.count}>00 : {count}
            </Text>
            <View style={styles.row}>
            <TouchableOpacity onPress={handleAddTime} style={styles.button}>
        <Text style={styles.text2}>+20s</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={onPressEnd}>
        <Text style={{color:'white',paddingTop:10}}>Алгасах</Text>
      </TouchableOpacity>
            </View>
            <Text style={{color:'gray', right:150, fontSize:20}}>Дараа</Text>
            <Text style={{right:90, fontSize:20, paddingTop:10}}>Barbell Bench Press:</Text>
            <Image source={squats} />

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: '#fff',
        paddingTop:40,
    },
    count: {
        paddingVertical:40,
        color:'#315CCA',
        fontSize:80,
        right:0
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
        fontSize:20,
        paddingTop: 100,
      },
      row: {
        flexDirection:'row',
        justifyContent:'space-between'
      },
      button: {
        width:100,
        height:40,
        backgroundColor:'#D9D9D9',
        borderRadius:20,
        alignItems:'center',
        right:10
      },
      button2: {
        width:100,
        height:40,
        backgroundColor:'#FB8733',
        left:20,
        borderRadius:20,
        alignItems:'center'
      },
      text2:{
        paddingTop:10
      }
})

export default Rest
