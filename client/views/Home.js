import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { ProgressBar } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from "react-native-swiper";
import img1 from '../assets/daily.png'
import img2 from '../assets/daily1.png'
import img3 from '../assets/daily2.png'
import img4 from '../assets/daily3.png'
import img5 from '../assets/daily4.png'
import img6 from '../assets/daily5.png'
import { useNavigation } from "@react-navigation/native";

import { FontAwesome5 } from '@expo/vector-icons';

export default function Home() {
  const navigation = useNavigation();

  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={() => {
            // Perform search action
          }}
        >
          <FontAwesome5 name="search" size={24} color="#777070" />
        </TouchableOpacity>
      ),
    });
  }, []);
  const [progress, setProgress] = useState(0.5);
  const onPress = () => {
    navigation.navigate('Abs')
  }

  const images = [
    { id: "1", source: require("../assets/Rectangle20.png"), text: "Deadlift буюу үндсэн таталтыг зөв \n хийх 4 арга техник", screen:"Home" },
    { id: "2", source: require("../assets/Rectangle21.png"), text: "Хүнсний ногоог хэрэглэх хамгийн \n эрүүл арга юу вэ?", screen:"Home" },
    { id: "3", source: require("../assets/Rectangle22.png"), text: "Сайн нүүрс ус гэж юу вэ", screen:"Home" },
    // Add more images here...
  ];

  const renderCarouselItem = (item) => (
    <TouchableOpacity
      style={styles.carouselItem}
      onPress={() => navigation.navigate(item.screen)}
    >

      <Image source={item.source} style={styles.image} />
      <Text style={styles.textnews}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <LinearGradient
        colors={['#C58BF2', '#6358E1']}
        style={styles.gradient}
        start={{ x: 1, y: 0.8 }}
        end={{ x: -0.2, y: 0.7 }}
        locations={[0, 1]}
      >
        <View style={styles.text1}>
          <Text style={{ color: 'white' }}>Долоо хонгийн идэвх</Text>
          <Text style={{ color: 'white' }}>{`${progress * 4}/4`}</Text>
        </View>
        <ProgressBar progress={progress} color="#4B40CE" style={{ width: "90%", height: 15, borderRadius: 10, left: 20 }} />
      </LinearGradient>
      <View style={styles.readall}>
        <Text style={{ marginRight: 80, fontSize: 20 }}>Зөвлөгөө Зөвлөмж</Text>
        <TouchableOpacity style={{ paddingTop: 5 }}>
          <Text style={{ color: 'gray' }}>Бүгдийг үзэх</Text>
        </TouchableOpacity>
      </View>
      <Swiper
        style={styles.carousel}
        loop={false}
        autoplay={false}
        showsPagination={false}
        showsButtons={false}
      >
        {images.map((item) => (
          <View key={item.id}>{renderCarouselItem(item)}</View>
        ))}
      </Swiper>
      <View style={styles.dasgaluudContainer}>
      <Text style={styles.dasgaluudText}>Энгийн дасгалууд</Text>
      <Image source={img1} />
      <View style={styles.dailycontainer}>
        <View style={styles.Alignbetween2}>
          <Image source={img2} />
          <View style={{ flexDirection: 'column', marginLeft:20 }}>
            <Text style={styles.text4}>Abs Эхлэгч</Text>
            <Text style={styles.text3}>18 mins</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity
            style={styles.roundButton2}
            onPress={onPress}>
            <FontAwesome5 name='play' size={10} color='#FFFFFF' style={{paddingTop:8}} solid/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Alignbetween2}>
          <Image source={img3} />
          <View style={{ flexDirection: 'column', marginLeft:20 }}>
            <Text style={styles.text4}>Цээж Эхлэгч</Text>
            <Text style={styles.text3}>12 mins</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity
            style={styles.roundButton2}
            >
            <FontAwesome5 name='play' size={10} color='#FFFFFF' style={{paddingTop:8}} solid/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Alignbetween2}>
          <Image source={img4} />
          <View style={{ flexDirection: 'column', marginLeft:20 }}>
            <Text style={styles.text4}>Мөр Эхлэгч</Text>
            <Text style={styles.text3}>15 mins</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity
            style={styles.roundButton2}>
            <FontAwesome5 name='play' size={10} color='#FFFFFF' style={{paddingTop:8}} solid/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Alignbetween2}>
          <Image source={img5} />
          <View style={{ flexDirection: 'column', marginLeft:20 }}>
            <Text style={styles.text4}>Хөл Эхлэгч </Text>
            <Text style={styles.text3}>15 mins</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity
            style={styles.roundButton2}>
            <FontAwesome5 name='play' size={10} color='#FFFFFF' style={{paddingTop:8}} solid/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Alignbetween2}>
          <Image source={img6} />
          <View style={{ flexDirection: 'column', marginLeft:20 }}>
            <Text style={styles.text4}>Нуруу Эхлэгч</Text>
            <Text style={styles.text3}>15 mins</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity
            style={styles.roundButton2}>
            <FontAwesome5 name='play' size={10} color='#FFFFFF' style={{paddingTop:8}} solid/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
  },
  Alignbetween2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    paddingVertical: 20,
  },
  gradient: {
    width: 350,
        height:75,
        borderRadius:10,
    },
    readall: {
        justifyContent:'space-between',
        flexDirection: 'row',
        paddingHorizontal: 0,
        paddingVertical: 10,
    },
      carouselItem: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
      image: {
        width: 350,
        height: 400,
        borderRadius:20,
        resizeMode:'stretch'
      },
      textnews:{
        position:'absolute',
        left:0,
        right:10,
        bottom:200,
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: 'white',
        fontSize:20,
      },
      text2:{
        right:100,
        position: "relative",
        bottom:100,
        fontSize:20,

      },
      text1:{
        flexDirection: "row",
        padding:10,
        justifyContent:'space-between',
        paddingHorizontal:20

      },
      dasgaluudContainer: {
        marginBottom: 10,
        position: "relative",
        bottom:350,
      },
      dasgaluudText: {
        fontSize: 20,
        textAlign:'left',
        paddingBottom:10
      },
      dailycontainer: {
        width:360,
        height:500,
        backgroundColor: '#FFFFFF',
      },
      roundButton2: {
        position: 'relative',
        width: 30,
        height: 30,
        borderColor: '#000',
        borderRadius: 20,
        borderWidth:1,
        alignItems: 'center',
        backgroundColor:'#000',
        alignContent:'center',
      },
})