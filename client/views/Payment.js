import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Qr from './SignUpZurag/qr.png'

const Payment = ({ route }) => {
    const navigation = useNavigation();
    const setIsPremiumUser = route.params?.setIsPremiumUser;
    const Goback = () => {
        navigation.goBack();
      }
      const pressPayment = () => {
        if (setIsPremiumUser) {
          setIsPremiumUser(true);
        }
        navigation.navigate('Done');
      }
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.roundButton1}
                onPress={Goback}>
                <FontAwesome5 name='chevron-left' size={20} color='#7B7576' style={styles.textBig} />
            </TouchableOpacity>
            <Text style={{paddingTop:75,paddingRight:250, fontSize:20}}>Төлбөр төлөх</Text>
            <Text style={{paddingTop:20,paddingRight:200, fontSize:15}}>Хаан банк  5082147601</Text>
            <Text style={{paddingRight:330, fontSize:15, paddingTop:20}}>Qpay</Text>
            <Image source={Qr} style={{marginTop:20}}/>
            <TouchableOpacity style={styles.button} onPress={pressPayment}>
           <Text style={styles.txt}>Төлбөр хийx</Text>
           </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 60,
        backgroundColor: '#FFFFFF',
    },
    roundButton1: {
        position: "absolute",
        width: 50,
        height: 50,
        left: 20,
        top: 50,
        borderColor: '#CFCFCF',
        borderRadius: 30,
        backgroundColor: "#FFFF",
        borderWidth:1
      },
      textBig: {
        alignSelf: 'center',
        position: 'absolute',
        paddingTop: 15,
      },
      button: {
        position:'relative',
        width:300,
        height:60,
        backgroundColor: '#6A36FF',
        marginTop:60,
        borderRadius:20,
        alignItems: 'center',

      },
      txt: {
        paddingTop:20,
        fontSize:20,
        color: '#FFFFFF',
      }
})
export default Payment