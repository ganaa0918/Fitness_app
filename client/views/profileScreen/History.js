import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Tseej2 from '../workout_nav/athome_pics/fitness_gym.png'
import Nuruu2 from '../workout_nav/athome_pics/fitness_nuruu.png'


const History = () => {
  const navigation = useNavigation();
  const Goback = () => {
      navigation.goBack();
    }
  const PressTseej = ()=>{
    navigation.navigate('UserScreen')
  }
    return(
        <View style={styles.container}>
           <TouchableOpacity
                style={styles.roundButton1}
                onPress={Goback}>
            <FontAwesome5 name='chevron-left' size={20} color='#7B7576' style={styles.textBig} />
            </TouchableOpacity>
            <View style={styles.fullWidth}>
            <View style={styles.costumContainer}>
        <TouchableOpacity onPress={PressTseej}>
        <Image source={Tseej2} style={{alignSelf: 'center'}} />
        <Text style={styles.button2}>Цээжний дасгал</Text>
        <Text style={styles.textfit}>Фитнэсс дасгал</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.costumContainer}>
        <TouchableOpacity>
        <Image source={Nuruu2} style={{alignSelf: 'center'}} />
        <Text style={styles.button2}>Нурууны дасгал</Text>
        <Text style={styles.textfit}>Фитнэсс дасгал</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 50,
      },
      roundButton1: {
        position: "relative",
        width: 50,
        height: 50,
        // left: 20,
        // top: 100,
        right:150,
        borderColor: '#CFCFCF',
        borderRadius: 10,
        backgroundColor: "#FFFF",
      },
      costumContainer: {
        position: 'relative',
        width: '100%',
        height: 150,
        justifyContent:'flex-start',
      },
      button2: {
        position:'absolute',
        left:30,
        top:30,
        color: 'white',
        fontSize: 24,
      },
      textfit: {
        position:'absolute',
        top:75,
        left:30,
        color: 'white',
      },
      textBig: {
        alignSelf: 'center',
        position: 'absolute',
        paddingTop: 15,
      },
      fullWidth: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        paddingTop:20,
      },
})
export default History