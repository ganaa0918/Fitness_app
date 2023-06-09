import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import { useState } from 'react'
import { CheckBox } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'

export default function BiyiinJin3({route}) {
  const [text, onChangeText] = React.useState('Useless Text');
  const [date, setDate] = useState('')
  const [jin, setJin] = useState('')
  const [undur, setUndur] = useState('')
  const [huis, setHuis] = useState('')
  const icon = "<"
  const navigation = useNavigation();
  const onPressBack = ()=> {
    navigation.goBack();
  }
  const onPressNext = ()=> {
    navigation.navigate("BiyiinJin4")
  }

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.GoyGarchig} >Биеийн аль хэсэгээ хөгжүүлэх вэ?</Text>
      </View>
      
      <TouchableOpacity
        style={styles.roundButton1}
        onPress={onPressBack}>
        <Text>{icon}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signBtn} onPress={onPressNext} >
        <Text style={styles.signText}>Үргэлжлүүлэх</Text>
      </TouchableOpacity>
      
    </View>
  );
}
const styles = StyleSheet.create({
  head: {
    alignItems:'left',
    position: 'absolute',
    left:44,
    top:120,
  },
  bigTxt: {
    fontSize:28,
  },
  roundButton1: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    borderColor: '#CFCFCF',
    borderWidth: 0.5,
    position: 'absolute',
    left: 44,
    top: 48
  },
  container: {
    backgroundColor:"#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },

  check: {

  },
  checkboxContainer: {
    flexDirection: 'row',
    left: true,
    marginBottom: 20,
    alignItems: 'flex-start',
    justifyContent: 'left',
    position: 'absolute',
    left:50,
    top:330,
  },
  txt: {
    paddingBottom: 30,
  },
  
  signBtn: {
    width: "70%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#6358E1",
  },
  signText: {
    color: 'white',
    fontSize: 20,
  },
  GoyGarchig:{
    fontSize:28,
    paddingLeft:10,
    paddingTop:20

  },
  Image: {
    width: 50,
    height: 50,
    paddingTop:10,
    resizeMode:'contain'
  }
 
});

