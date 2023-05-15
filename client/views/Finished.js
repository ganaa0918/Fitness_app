import React, {useEffect} from "react";
import { View,Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Finished = () => {
    const navigation = useNavigation();
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            navigation.navigate('MainContainer')
        }, 5000);
        return () =>clearTimeout(timeout)
    },[])
    return(
        <View style={styles.container}>
            <Image source={require('./SignUpZurag/great.gif')} style={{width:"100%", height:400, top:150 }}/>

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
})
export default Finished