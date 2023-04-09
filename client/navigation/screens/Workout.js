import * as React from "react";
import {View, Text} from "react-native"
export default function Workout({navigation}) {
  return (
    <View classname="flex-1, justify-center, align-items-center">
        <Text classname="text-blue-600" onPress={()=> navigation.navigate('Home')}>Workout screen</Text>
    </View>
    )
}
