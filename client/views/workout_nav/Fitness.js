import React from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity,ScrollView, TouchableHighlight  } from 'react-native'
import Premuim from './athome_pics/premuim.png'
import Tseej2 from './athome_pics/fitness_gym.png'
import Nuruu2 from './athome_pics/fitness_nuruu.png'
import Mor from './athome_pics/fitness_mor.png'
import Hol2 from './athome_pics/fitness_hol.png'
function Fitness({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.fullWidth}>
        <View style={styles.costumContainer}>
        <Image source={Premuim} style={{alignSelf: 'center'}} />
          <Text style={styles.button3}>Pro хэрэглэгч болох</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Эхлэх</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.costumContainer}>
        <TouchableOpacity>
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
        <View style={styles.costumContainer}>
        <TouchableOpacity>
        <Image source={Mor} style={{alignSelf: 'center'}} />
        <Text style={styles.button2}>Мөрний дасгал</Text>
        <Text style={styles.textfit}>Фитнэсс дасгал</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.costumContainer}>
        <TouchableOpacity>
        <Image source={Hol2} style={{alignSelf: 'center'}} />
        <Text style={styles.button2}>Хөлний дасгал</Text>
        <Text style={styles.textfit}>Фитнэсс дасгал</Text>
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"flex-start",
  },
  fullWidth: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  costumContainer: {
    position: 'relative',
    width: '100%',
    height: 150,
    justifyContent:'flex-start'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#283BE8',
    borderRadius: 20,
    opacity:0.8,
    left:100,
    right:100,
    top:60,
    width: 200,
    height:40,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  button2: {
    position:'absolute',
    left:30,
    top:30,
    color: 'white',
    fontSize: 24,
  },
  button3: {
    position:'absolute',
    left:50,
    top:20,
    color: 'white',
    fontSize: 20,
  },
  textfit: {
    position:'absolute',
    top:75,
    left:30,
    color: 'white',
  }
})
export default Fitness