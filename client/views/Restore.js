import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, fontFamily} from 'react-native'
import { useState } from 'react'
import { CheckBox } from 'react-native-web'
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const icon = "<"

  const handleResume = () => {
    // Энд пассворд имейлээ шалгана
    // if (1 == 1)
    //     navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.roundButton1}>
        <Text>{icon}</Text>
      </TouchableOpacity>
      <View style={styles.head}>
        <Text style={styles.bigTxt}>Нууц үг мартсан?</Text>
        <Text style={{marginTop:20, color:'#938E8E'}}>Та имейл хаягаа үлдээнэ үү. Бид нууц үгийг тань иилгээх болно</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Цахим шуудан"
      />
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Үргэлжлүүлэх</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    alignItems:'left',
    position: 'absolute',
    left:44,
    top:120,
    fontFamily: 'Inter',
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
  },
  input: {
    width: '60%',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  loginBtn: {
    width: "70%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#6358E1",
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  }
})

export default Login