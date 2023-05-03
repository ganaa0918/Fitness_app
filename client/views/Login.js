import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, fontFamily} from 'react-native'
import { useState } from 'react'
import { CheckBox } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSelected, setSelection] = useState('')
  const icon = "<"

  const handleLogin = () => {
    // Энд пассворд имейлээ шалгана
    // if (1 == 1)
    //     navigation.navigate('Home')
  }
  const onPressback =()=>{
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressback}
        style={styles.roundButton1}>
        <Text>{icon}</Text>
      </TouchableOpacity>
       <View >
        <Text  >Нэвтрэх</Text>
      </View>
      
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Цахим шуудан"
      />
      
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Нууц үг"
        secureTextEntry={isSelected ? false : true}
      />
      {/* TODO checkbox zasah */}
      {/* <View style={styles.checkboxContainer}>

        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.check}
        />
        <Text style={styles.txt}>Нууц үг харах</Text>
      </View> */}
      
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("MainContainer")} >
        <Text style={styles.loginText}>Нэвтрэх</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Restore")}>
        <Text style={styles.forgot_button}>Нууц үгээ мартсан уу?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signin_button} onPress={() => navigation.navigate("SignUp")}>Хэрэв аккаунт байхгүй бол бүртгүүлэх</Text>
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
    paddingLeft: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: '#228694',
    marginTop: 30
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
  },
  signin_button: {
    color: 'grey',
    fontSize: 11,
    position: 'relative',
    top:150,
  }
})

export default Login