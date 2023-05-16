import * as React from "react";
import {View, Text} from "react-native"
import {
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

//import React Native chart Kit for different kind of Chart
import {

  ContributionGraph,
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
        }}   > Сараар</Text>
          <ContributionGraph
        values={[
          {date: '2019-01-02', count: 1},
          {date: '2019-01-03', count: 2},
          {date: '2019-01-04', count: 3},
          {date: '2019-01-05', count: 4},
          {date: '2019-01-06', count: 5},
          {date: '2019-01-30', count: 2},
          {date: '2019-01-31', count: 3},
          {date: '2019-03-01', count: 2},
          {date: '2019-04-02', count: 4},
          {date: '2019-03-05', count: 2},
          {date: '2019-02-30', count: 4},
        ]}
        endDate={new Date('2019-04-01')}
        numDays={115}
        width={Dimensions.get('window').width - 16}
        height={250}
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
      />
         
    </View>
    )
}