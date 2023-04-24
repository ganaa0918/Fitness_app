import * as React from "react";
import {View, Text} from "react-native"
export default function Activity({navigation}) {
  return (
    <View classname="flex-1, justify-center, align-items-center">
        <Text classname="text-blue-600" onPress={()=> navigation.navigate('Home')}>Activity screen</Text>
    </View>
    )
}
