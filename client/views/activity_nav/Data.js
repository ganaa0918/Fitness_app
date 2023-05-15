import * as React from "react";
import {View, Text} from "react-native"
import {
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

//import React Native chart Kit for different kind of Chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  StackedBarChart,
} from 'react-native-chart-kit';
export default function Activity({navigation}) {
  return (
    <View classname="flex-1, justify-center, align-items-center">
    
 
      <Text classname="text-blue-600" style={{
          marginTop: 15,
          margin: 25,
          marginVertical: 8,
          borderRadius: 16,
          fontSize: 20
        }}   >Activity screen</Text>
        <LineChart
        data={{
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' , 'Sun'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43, 50],
              strokeWidth: 2,
            },
          ],
        }}
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
          marginTop: 5,
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
         <Text classname="text-blue-600" style={{
          marginTop: 15,
          margin: 25,
          marginVertical: 8,
          borderRadius: 16,
          fontSize: 20
        }}   >Activity screen</Text>
        <LineChart
        data={{
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' , 'Sun'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43, 50],
              strokeWidth: 2,
            },
          ],
        }}
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
          marginTop: 5,
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
    )
}