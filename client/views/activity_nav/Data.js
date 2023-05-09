import * as React from "react";
import {View, Text} from "react-native"
export default function Activity({navigation}) {
  return (
    <View classname="flex-1, justify-center, align-items-center">
    
      <Text style={styles.header}>Progress Chart</Text>
      <ProgressChart
        data={[0.4, 0.6, 0.8]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
  
    </View>
    )
}