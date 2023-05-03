import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import { useState } from 'react'
import { CheckBox } from 'react-native-web'
import hi from '/Users/namuundari/Documents/mobile/git Biy daalt/my-folder/Fitness_app/client/views/SignUpZurag/hi.png';


export default function BiyiinJin({route, navigation}) {
  
  const [text, onChangeText] = React.useState('Useless Text');
  const [date, setDate] = useState('')
  const [jin, setJin] = useState('')
  const [undur, setUndur] = useState('')
  const [huis, setHuis] = useState('')
  const icon = "<"


  return (
    <View style={styles.container}>
      <Image source={hi} style={{width:300,height:250}} />
      <TouchableOpacity
        style={styles.roundButton1}>
        <Text>{icon}</Text>
      </TouchableOpacity>
       <View >
        <Text style={styles.GoyGarchig} >Үнэн зөв бөглөнө үү.</Text>
        <Text style={styles.txt} >Доорх мэдээлэлд үндэслэн танд тохирох дасгалыг сонгох болно.</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={text => setHuis(text)}
        value={huis}
        placeholder="Хүйс (эр 🙋🏻‍♂️, эм 🙋🏻‍♀️)"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setDate(text)}
        value={date}
        placeholder="Төрсөн он сар өдөр"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setJin(text)}
        value={jin}
        placeholder="Жин"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setUndur(text)}
        value={undur}
        placeholder="Өндөр"
      />
     
     
      
      <TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate("BiyiinJin2")} >
        <Text style={styles.signText}>Дараах</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:"#fff"
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
    paddingLeft:40,
    paddingBottom:60
  },
  Image: {
    width: 50,
    height: 50,
    paddingTop:10,
    resizeMode:'contain'
  }
 
});

