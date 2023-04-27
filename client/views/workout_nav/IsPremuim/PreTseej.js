import React from 'react'
import {View , Text, Image, StyleSheet,TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import Tseej1 from '../athome_pics/fitness_gym.png'


const PreTseej = () => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: '#fff',
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
})
export default PreTseej