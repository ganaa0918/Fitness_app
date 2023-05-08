import * as React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Button } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {LinearGradient} from 'expo-linear-gradient'

import Tseej from '../workout_nav/athome_pics/tseej.png'
import Vector from '../workout_nav/athome_pics/Vector.png';
import Dasgal2 from '../workout_nav/athome_pics/dasgal2.png';
import Dasgal3 from '../workout_nav/athome_pics/dasgal3.png';
import Dasgal4 from '../workout_nav/athome_pics/dasgal4.png';
import Dasgal5 from '../workout_nav/athome_pics/dasgal5.png';
import Dasgal6 from '../workout_nav/athome_pics/dasgal6.png'
import Dasgal7 from '../workout_nav/athome_pics/dasgal7.png'
import Dasgal8 from '../workout_nav/athome_pics/dasgal8.png'
import Dasgal9 from '../workout_nav/athome_pics/dasgal9.png'


function Exercises() {
  const navigation = useNavigation();
  const Goback = () => {
    navigation.goBack();
  }
  const onPress = () => {
    navigation.navigate('Dasgal')
  }
  const onPressPush = () => {
    navigation.navigate('Pushups')
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>

      <Image source={Tseej} style={styles.image} />
      <TouchableOpacity
        style={styles.roundButton1} onPress={Goback}>
        <FontAwesome5 name='chevron-left' size={20} color='#7B7576' style={styles.textBig} />
      </TouchableOpacity>
      <Text style={styles.text2}>Цээж</Text>
      <View style={styles.Alignbetween}>
        <Text style={styles.text3}>
          Эхлэгч | 18mins | 320 Calories Burn
        </Text>
        <FontAwesome5 name='heart' size={20} color='#ff0000' solid />
      </View>
      <View style={styles.Alignbetween3}>
        <Text style={styles.text4}>
          Exercises
        </Text>
        <Text style={styles.text3}>
          2 Sets
        </Text>
      </View>
      <Text style={{
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        fontSize: 15,
        paddingTop: 10
      }}>
        Set 1
      </Text>
      <View style={styles.Alignbetween2}>
        <Image source={Vector} />
        <View style={{ flexDirection: 'column', marginLeft:20 }}>
          <Text style={styles.text4}>Push-Ups</Text>
          <Text style={styles.text3}>12x</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
          onPress={onPressPush}
          style={styles.roundButton2}>
          <FontAwesome5 name='chevron-left' size={20} color='#7B7576' solid/>
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
          <FontAwesome5 name='chevron-left' size={20} color='#7B7576' solid/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Alignbetween2}>
        <Image source={Dasgal3} />
        <View style={{ flexDirection: 'column', marginLeft:20 }}>
          <Text style={styles.text4}>Squats</Text>
          <Text style={styles.text3}>20x</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
          style={styles.roundButton2}>
          <FontAwesome5 name='chevron-left' size={20} color='#7B7576' solid/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Alignbetween2}>
        <Image source={Dasgal4} />
        <View style={{ flexDirection: 'column', marginLeft:20 }}>
          <Text style={styles.text4}>Arm Raises</Text>
          <Text style={styles.text3}>00:53</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
          style={styles.roundButton2}>
          <FontAwesome5 name='chevron-left' size={20} color='#7B7576' solid/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Alignbetween2}>
        <Image source={Dasgal5} />
        <View style={{ flexDirection: 'column', marginLeft:20 }}>
          <Text style={styles.text4}>Rest and Drink</Text>
          <Text style={styles.text3}>02:00</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
          style={styles.roundButton2}>
          <FontAwesome5 name='chevron-left' size={20} color='#7B7576' solid/>
          </TouchableOpacity>
        </View>
      </View>
      {/* set2 */}
      <Text style={{
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        fontSize: 15,
        paddingTop: 30
      }}>
        Set 2
      </Text>
      <View style={styles.Alignbetween2}>
        <Image source={Dasgal6} />
        <View style={{ flexDirection: 'column', marginLeft:20 }}>
          <Text style={styles.text4}>Incline Push-Ups</Text>
          <Text style={styles.text3}>12x</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
          style={styles.roundButton2}>
          <FontAwesome5 name='chevron-left' size={20} color='#7B7576' solid/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Alignbetween2}>
        <Image source={Dasgal7} />
        <View style={{ flexDirection: 'column', marginLeft:20 }}>
          <Text style={styles.text4}>Push-Ups</Text>
          <Text style={styles.text3}>15x</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
          style={styles.roundButton2}>
          <FontAwesome5 name='chevron-left' size={20} color='#7B7576' solid/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Alignbetween2}>
        <Image source={Dasgal8} />
        <View style={{ flexDirection: 'column', marginLeft:20 }}>
          <Text style={styles.text4}>Skipping</Text>
          <Text style={styles.text3}>15x</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
          style={styles.roundButton2}>
          <FontAwesome5 name='chevron-left' size={20} color='#7B7576' solid/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Alignbetween2}>
        <Image source={Dasgal9} />
        <View style={{ flexDirection: 'column', marginLeft:20 }}>
          <Text style={styles.text4}>Cobra Stretch</Text>
          <Text style={styles.text3}>20x</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
          style={styles.roundButton2}>
          <FontAwesome5 name='chevron-left' size={20} color='#7B7576' solid/>
          </TouchableOpacity>
        </View>

      </View>
      <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#6358E1', '#C58BF2']}
        style={styles.gradient}
        start={{ x: 0.6, y: 1 }}
        end={{ x: 0, y: 1 }}
        locations={[0,1]}
      >
        <Text style={styles.text}>Эхлэх</Text>
      </LinearGradient>
      </TouchableOpacity>
      <View style={styles.space} ></View>


      </ScrollView>
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
  contentContainer: {
    width: '100%',
    paddingTop: 20,
    height: '100%',
  },
  image: {
    width: "100%",
    height: 220,
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
  iconheart: {
    position: 'absolute',
    left: 100
  },
  Alignbetween: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  Alignbetween2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    paddingVertical: 20,
  },
  text4: {
    fontSize: 15,
    color: '#000',
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
  linearButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    position:'absolute',
    width: 300,
    height:50,
    backgroundColor: '#6358E1',
    linearGradient: {
      colors: ['#6358E1', '#C58BF2'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
    },
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    
  },
  gradient: {
    justifyContent: 'center',
    width: 300,
    height: 50,
    alignItems: 'center',
    position:'relative',
    left: 50,
    borderRadius: 20
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  space:{
    height:50
  },
  Alignbetween3:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    paddingTop:20
  }
});
export default Exercises