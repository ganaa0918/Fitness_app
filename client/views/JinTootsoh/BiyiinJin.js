import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import { useState , useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../UsersContext';
export default function BiyiinJin({route}) {
  
  const [text, onChangeText] = React.useState('Useless Text');
  const [date, setDate] = useState('')
  const [jin, setJin] = useState('')
  const [undur, setUndur] = useState('')
  const [huis, setHuis] = useState('')
  const [tseej, setTseej] = useState('')
  const [belhuus, setBelhuus] = useState('')
  const [buselhii, setBuselhii] = useState('')
  const { user  } = useContext(UserContext)
  const icon = "<"

  
  const navigation = useNavigation();
  const handleLogin = () => { 
    console.log(user);
   var ner = user[0]
   var password = user[1]
   var email = user[2]
   var phone = user[3]
   fetch('http://10.0.2.2:3000/SignUp1' ,
   {
     method: 'post' ,
     headers: { 'Content-Type': 'application/json'},
     body: JSON.stringify({ner , email, password, phone , huis , tseej , belhuus, buselhii ,jin ,undur})
   }
    ).then(data => data.json()).then(data => {
      alert('amjiltai burtgegdelee');
      })
  }
  const PressNext = () =>{
    navigation.navigate('BiyiinJin2')
  }
  const onPressBack = ()=> {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.roundButton1}
        onPress={onPressBack}>
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
       <TextInput
        style={styles.input}
        onChangeText={text => setTseej(text)}
        value={tseej}
        placeholder="Цээжний тойрог"
      />
       <TextInput
        style={styles.input}
        onChangeText={text => setBelhuus(text)}
        value={belhuus}
        placeholder="Бэлхүүсний тойрог"
      />
       <TextInput
        style={styles.input}
        onChangeText={text => setBuselhii(text)}
        value={buselhii}
        placeholder="Бүсэлхийн тойрог"
      />
      {/* <TouchableOpacity style={styles.signBtn} onPress={() => handleLogin()} > */}
      <TouchableOpacity style={styles.signBtn} onPress={PressNext} >
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

