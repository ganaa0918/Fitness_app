import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet,TouchableOpacity, Image,ScrollView, TextInput, FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient'


import Costumizeimg from './athome_pics/costumize.png'
function Costumize() {
  const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation();
    const Goback = () => {
      navigation.goBack();
    }
    const data = [
      {
        id: 1,
        imageSource: require('../workout_nav/athome_pics/Vector.png'),
        text1: 'Push Ups',
        text2: '12x',
        iconName: 'circle'
      },
      {
        id: 2,
        imageSource: require('../workout_nav/athome_pics/dasgal2.png'),
        text1: 'Skipping',
        text2: '15x',
        iconName: 'circle'
      },
      {
        id: 3,
        imageSource: require('../workout_nav/athome_pics/dasgal3.png'),
        text1: 'Squats',
        text2: '20x',
        iconName: 'circle'
      },
      {
        id: 4,
        imageSource: require('../workout_nav/athome_pics/dasgal4.png'),
        text1: 'Arm Raises',
        text2: '10x',
        iconName: 'circle'
      },
      {
        id: 5,
        imageSource: require('../workout_nav/athome_pics/dasgal5.png'),
        text1: 'REst',
        text2: '5 min',
        iconName: 'circle'
      },
      {
        id: 6,
        imageSource: require('../workout_nav/athome_pics/dasgal3.png'),
        text1: 'Squats',
        text2: '20x',
        iconName: 'circle'
      },
    ];
    const filteredData = data.filter((item) =>
  item.text1.toLowerCase().includes(searchQuery.toLowerCase())
);
const handleSearch = (text) => {
  setSearchQuery(text);
};
    const backgroundColor = '#000';
  return (
    <View style={[styles.container,{backgroundColor}]}>

            <View style={styles.header}>
        <Image source={Costumizeimg} style={styles.image} />
        <Text style={styles.bigText}>Гэрийн{"\n"}дасгал бүтээх</Text>
        <Text style={styles.smallText}>Өөрийгөө бүтээ</Text>
        </View>
        <TouchableOpacity
        style={styles.roundButton1} onPress={Goback}>
        <FontAwesome5 name='chevron-left' size={20} color='#7B7576' style={styles.textBig} />
      </TouchableOpacity>

      <TextInput style={{backgroundColor:'white', marginHorizontal:80, borderRadius:20, height:25, width:"80%"}}
      placeholder='Search...'
      onChangeText={handleSearch}
      value={searchQuery}/>
      <FlatList
  data={filteredData}
  renderItem={({ item }) => (
    <View style={styles.Alignbetween2}>
      <Image source={item.imageSource} />
      <View style={{ flexDirection: 'column', marginLeft:20 }}>
        <Text style={styles.text4}>{item.text1}</Text>
        <Text style={styles.text3}>{item.text2}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end',marginLeft:120 }}>
        <TouchableOpacity style={styles.roundButton2}>
          <FontAwesome5 name={item.iconName} size={20} color='#7B7576' />
        </TouchableOpacity>
      </View>
    </View>
  )}
  keyExtractor={(item) => item.id.toString()}
/>
      <LinearGradient
        colors={['#5625E3', '#9959D9']}
        style={styles.gradient}
        start={{ x: 0.6, y: 1 }}
        end={{ x: 0, y: 1 }}
        locations={[0,1]}
      >
        <Text style={styles.text}>Эхлэх</Text>
      </LinearGradient>
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
    top:100,
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
    height:350,
    left:10
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
    left: 0,
    borderRadius: 20,
    marginBottom:30
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