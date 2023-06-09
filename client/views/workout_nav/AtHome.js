import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Hol from './athome_pics/hol.png';
import Tseej from './athome_pics/tseej.png';
import Nuruu from './athome_pics/nuruu.png';
import Gedes from './athome_pics/gedes.png';
import Costum from './athome_pics/athome_costom.png';
import { useNavigation } from '@react-navigation/native';
function AtHome () {
const navigation= useNavigation();

  const goToSecondScreen = () => {
    navigation.navigate('Exercises');
  };
  return (
    <View style={styles.container}>
      <View style={styles.fullWidth}>
        <View style={styles.costumContainer}>
          <Image source={Costum} style={styles.costumImage} />
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Costumize')}>
            <Text style={styles.buttonText}>Эхлэх</Text>
          </TouchableOpacity>
          <View style={styles.textContainer}>
    <Text style={styles.bigText}>Гэрийн{"\n"}дасгал бүтээх</Text>

    <Text style={styles.smallText}>Ухаалгаар хөгжүүл{"\n"}Өөрийгөө бүтээ</Text>
  </View>
        </View>
      </View>
      <View >
        <Text style={styles.text2}>Body focus</Text>
      </View>
      <View style={styles.twoColumn}>
        <TouchableOpacity style={styles.image} onPress={goToSecondScreen}>
        <Image source={Tseej}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.image}>
        <Image source={Nuruu}  />
        </TouchableOpacity>
      </View>
      <View style={styles.twoColumn2}>
      <Text style={styles.text3}>Цээж {"\n"} <Text style={styles.greyText}>12 дасгал</Text></Text>
      <Text style={styles.text4}>Нуруу{"\n"}<Text style={styles.greyText}>12 дасгал</Text></Text>
      </View>
      <View style={styles.twoColumn}>
      <TouchableOpacity style={styles.image}>
        <Image source={Hol}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.image}>
        <Image source={Gedes}  />
        </TouchableOpacity>
      </View>
      <View style={styles.twoColumn2}>
      <Text style={styles.text3}>Хөл {"\n"} <Text style={styles.greyText}>12 дасгал</Text></Text>
      <Text style={styles.text4}>Хэвлий{"\n"}<Text style={styles.greyText}>12 дасгал</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  fullWidth: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  costumContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  costumImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 40,
    backgroundColor: '#283BE8',
    borderRadius: 20,
    width: 75,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  twoColumn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 10
  },
  twoColumn2: {
    width: '100%',
    flexDirection: 'row',
    padding:0,
    paddingHorizontal: 15,
    justifyContent:'space-between',
    paddingBottom: 10,
  },
  image: {
    width: '48%',
    height: 130,
    resizeMode: 'contain',
  },text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  smallText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    paddingLeft: 10,
    paddingBottom: 20,
  },
  bigText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    paddingLeft: 10,
  },
  text2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    paddingBottom: 5,
  },
  text4: {
    right: 110,
  },
  greyText: {
    color: 'grey',
  }

});

export default AtHome;