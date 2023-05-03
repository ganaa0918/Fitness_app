import React from "react";
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import ehlel2 from './ehlel/ehlel2.png'
const Ehlel2 = ({navigation})=> {
    const onPressbtn =() =>{
        navigation.navigate('Log')
    }
    return(
        <View style={styles.container} >
            <View style={styles.image}>
            <Image source={ehlel2} />
            </View>
            <View style={styles.Textpad}>
            <Text style={styles.TextBig}>Техникийг сур</Text>
            <Text style={styles.Textpadtop}>Манай дасгалын хөтөлбөрүүдийг </Text>
            <Text>мэргэжлийн хүмүүс хийдэг</Text>
            </View>
            <View style={styles.circles}>
                <View style={styles.circle}/>
                <View style={styles.circle2}/>
                <View style={styles.circle3}/>
            </View>
            <View style={styles.btns}>
            <TouchableOpacity
        style={styles.roundButton1} onPress={onPressbtn}>
        <FontAwesome5 name='arrow-right' size={20} color='#FFF' style={styles.textBig} regular/>
      </TouchableOpacity>
      </View>
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
        backgroundColor:'#6358E1',
        borderRadius:20,

    },
    circle3:{
        position:'absolute',
        height:10,
        width:10,
        backgroundColor:'#9D96ED',
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
    },
    roundButton1: {
        position: "relative",
        width: 50,
        height: 50,
        borderColor: '#CFCFCF',
        borderRadius: 40,
        backgroundColor: "#6358E1",
        alignItems:'center'
      },
      textBig: {
        alignSelf: 'center',
        position: 'absolute',
        paddingTop: 15,
      },
      btns: {
        paddingTop: 20
      }
})
export default Ehlel2;