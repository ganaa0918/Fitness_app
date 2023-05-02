import React from "react";
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import Ehlel3 from './ehlel/ehlel3.png'
const Log = ({navigation})=> {
    onPressregister =() =>{
        navigation.navigate('#')
    }
    onPressLogin =() =>{
        navigation.navigate('Login_nav')
    }
    return(
        <View style={styles.container} >
            <View style={styles.image}>
            <Image source={Ehlel3} />
            </View>
            <View style={styles.Textpad}>
            <Text style={styles.TextBig}>Хүчтэй, эрүүл байгаарай</Text>
            <Text style={styles.Textpadtop}>Бид таныг хөтөлбөрөөс бүрэн </Text>
            <Text>таашаал авч, эрүүл саруул, эерэг</Text>
            <Text>байхыг хүсч байна</Text>
            </View>
            <View style={styles.circles}>
                <View style={styles.circle}/>
                <View style={styles.circle2}/>
                <View style={styles.circle3}/>
            </View>
        <TouchableOpacity style={styles.button} onPress={onPressregister}>
            <Text style={styles.buttontext}>Эхлэх</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogin}>
        <Text style={styles.login}>Нэвтрэх</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'flex-start',
    alignItems: "center",
    },
    image:{
        paddingTop:100
    },
    TextBig:{
        fontSize:20
    },
    Textpad:{
        paddingTop:40,
        paddingBottom:10,
        alignItems:'center'
    },
    Textpadtop:{
        paddingTop:10
    },
    circles:{paddingVertical:20},
    circle:{
        position:'absolute',
        height:10,
        width:10,
        backgroundColor:'#9D96ED',
        borderRadius:20,
        right:10
    },
    circle2:{
        position:'absolute',
        height:10,
        width:10,
        backgroundColor:'#9D96ED',
        borderRadius:20,

    },
    circle3:{
        position:'absolute',
        height:10,
        width:10,
        backgroundColor:'#6358E1',
        borderRadius:20,
        left:20,
    },
    button:{
        position:'relative',
        width:300,
        height:50,
        backgroundColor:'#6358E1',
        alignItems: 'center',
        borderRadius:20,
    },
    buttontext:{
        fontSize: 20,
        color: 'white',
        paddingTop:10
    },
    login:{
        paddingTop:20
    }
})
export default Log;