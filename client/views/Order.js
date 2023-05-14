import React,{useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from  'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Order = ()=> {
    const navigation = useNavigation();
    const [stext, setText] = useState('black')
    const [stext2, set2Text] = useState('black')
    const [box1Color, setBox1Color] = useState('#FFFFFF');
    const [box2Color, setBox2Color] = useState('#FFFFFF');
    const [isPressed, setIsPressed] = useState(false);
    const [isPressed2, setIsPressed2] = useState(false);
    const [selectedBox, setSelectedBox] = useState(null);

    const handleBox1Press = () => {
      setBox1Color('#6A36FF');
      setBox2Color('#FFFFFF');
      setText('white');
      set2Text('black');
      setIsPressed(!isPressed);
      setIsPressed2(isPressed2);
      setSelectedBox(1)

    };

    const handleBox2Press = () => {
      setBox1Color('#FFFFFF');
      setBox2Color('#6A36FF');
      setText('black');
      set2Text('white');
      setIsPressed(isPressed);
      setIsPressed2(!isPressed2);
      setSelectedBox(2)
    };

    const Goback = () => {
        navigation.goBack();
      }

    const handleNavigatePress = () => {
    if (selectedBox === 1) {
      navigation.navigate('Payment');
    } else if (selectedBox === 2) {
      navigation.navigate('Payment');
    }
  };

      function ListItem({ children }) {
        return (
          <View style={styles.listItem}>
            <View style={styles.bullet} />
            <Text style={styles.text}>{children}</Text>
          </View>
        );
      }
    return(
        <View style={styles.container}>
             <TouchableOpacity
                style={styles.roundButton1}
                onPress={Goback}>
            <FontAwesome5 name='chevron-left' size={20} color='#7B7576' style={styles.textBig} />
            </TouchableOpacity>
            <Text style={styles.texthead}>Захиалга</Text>
            <Text style={styles.text2}>Pro Гишүүнчлэл</Text>
            <View style={styles.list}>
                <ListItem>Xязгааргүй дасгал</ListItem>
                <ListItem>Хувийн төлөвлөгөө</ListItem>
                <ListItem>График, аналитик, ойлголт</ListItem>
            </View>
           <View>
           <TouchableOpacity onPress={handleBox1Press}>
            <View style={{paddingTop:20}}>
            <View style={[styles.box,{backgroundColor:box1Color}]}/>
            <View style={{flexDirection: 'column', position:'absolute', paddingTop:40, paddingLeft:20,}}>
                <Text style={{paddingBottom:10, color:stext}}>Сар бүр</Text>
                <Text style={{color: stext}}>25’000₮ / сар</Text>
            </View>
            </View>
            </TouchableOpacity>
            {isPressed ?
            <View style={{position:'absolute', width:40, height:40, borderRadius:'100%', borderWidth:10, left:275,top:50,borderColor:'white'}} />
            :
            <View style={{position:'absolute', width:40, height:40, borderRadius:'100%', borderWidth:1, left:275,top:50,borderColor:'gray'}} />
            }
           </View>

           <View>
           <TouchableOpacity onPress={handleBox2Press}>
            <View style={{paddingVertical:40}}>
            <View style={[styles.box,{backgroundColor:box2Color}]}/>
            <View style={{flexDirection: 'column', position:'absolute', paddingTop:60, paddingLeft:20,}}>
                <Text style={{paddingBottom:10, color:stext2}}>Жил бүр</Text>
                <Text style={{color: stext2}}>260,000₮ / сар</Text>
            </View>
            {isPressed2 ?
            <View style={{position:'absolute', width:40, height:40, borderRadius:'100%', borderWidth:10, left:275,top:70,borderColor:'white'}} />
            :
            <View style={{position:'absolute', width:40, height:40, borderRadius:'100%', borderWidth:1, left:275,top:70,borderColor:'gray'}} />

            }
            </View>
            </TouchableOpacity>
           </View>

           <TouchableOpacity style={styles.button} onPress={handleNavigatePress}>
           <Text style={styles.txt}>Сонгох</Text>
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
        left: 10,
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
      texthead: {
        fontSize:20
      },
      text2: {
        right:75,
        top:50,
        fontSize:30
      },
      listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
      },
      bullet: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'black',
        marginRight: 8,
      },
      text: {
        fontSize: 16,
      },
      list: {
         right:75,
         paddingTop:50,
      },
      box: {
        width: 350,
        height:100,
        borderRadius:25,
        position:'relative',
        borderWidth:1,
        borderColor:'gray',
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

export default Order