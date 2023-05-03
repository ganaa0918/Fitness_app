import React from 'react'
import {View , Text, Image, StyleSheet,TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {LinearGradient} from 'expo-linear-gradient'


import Tseej1 from '../athome_pics/fitness_gym.png'


const FreTseej = () => {
  const navigation = useNavigation();
  const Goback = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Image source={Tseej1} style={styles.image} />
      <TouchableOpacity
        style={styles.roundButton1} onPress={Goback}>
        <FontAwesome5 name='chevron-left' size={20} color='#7B7576' style={styles.textBig} />
      </TouchableOpacity>
      <Text style={styles.text2}>Цээж</Text>
      <View style={styles.Alignbetween}>
        <Text style={styles.text3}>
          Эхлэгч | 18mins | 320 Calories Burn
        </Text>
      </View>
      <View style={styles.exe}>

      </View>
      <LinearGradient
        colors={['#92F7FD', '#020D18']}
        style={styles.gradient}
        start={{ x: 1, y: 0.8 }}
        end={{ x: -0.2, y: 0.7 }}
        locations={[0,1]}
      >
        <Text style={styles.text}>Pro Гишүүн</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
alignItems: "center",
  },
  image:{
    width: '100%',
    height: 150
  },
  textBig: {
    alignSelf: 'center',
    position: 'absolute',
    paddingTop: 15,
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
  text2: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    fontSize: 20,
    paddingTop: 10
  },
  text3: {
    fontSize: 15,
    color: '#7B7576',
  },
  Alignbetween: {
    justifyContent:'flex-start',
    flexDirection: 'row',
    width: '100%',
    padding: 20
  },
  exe:{
    width:'100%',
    height:450,
  },
  gradient: {
    justifyContent: 'center',
    width: 300,
    height: 50,
    alignItems: 'center',
    position:'relative',
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})
export default FreTseej