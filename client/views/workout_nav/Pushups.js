import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Exe1 from './athome_pics/exe1.png'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Pushups = () => {
    const navigation = useNavigation()
const onPressBack =()=>{
    navigation.goBack()
}
    return(
        <View style={styles.container}>
        <TouchableOpacity
        style={styles.roundButton1} onPress={onPressBack}>
        <FontAwesome5 name='chevron-left' size={20} color='#7B7576' style={styles.textBig} />
      </TouchableOpacity>
            <Image source={Exe1} />
            <Text style={styles.text}>Түлхэх нь дээд биеийн түлхэлтийн хүчийг сайжруулахад туслах гайхалтай дасгал юм. Эдгээр нь булчингийн масс, хүч чадал, тэсвэр тэвчээрийг бий болгоход тусалдаг бөгөөд энэ нь таны эзлэхүүн, багц, давталтыг хэрхэн өөрчлөхөөс хамаарна.

Уламжлалт түлхэлт нь биеийн дээд хэсгийг бэхжүүлэхэд тустай. Тэд трицепс, цээжний булчин, мөрийг ажиллуулдаг. Зохих хэлбэрээр хийвэл хэвлийн булчингуудыг татах (татах) замаар доод нуруу болон гол хэсгийг бэхжүүлдэг. Түлхэлт нь хүч чадлыг нэмэгдүүлэх хурдан бөгөөд үр дүнтэй дасгал юм</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: '#fff',
    },
    roundButton1: {
        position: "absolute",
        width: 50,
        height: 50,
        left: 10,
        top: 50,
        borderColor: '#CFCFCF',
        borderRadius: 10,
        backgroundColor: "#FFFF"
      },
      textBig: {
        alignSelf: 'center',
        position: 'absolute',
        paddingTop: 15,
      },
      text: {
        paddingHorizontal:20,
        paddingVertical:20,
      }
})
export default Pushups