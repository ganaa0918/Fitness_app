import * as React from "react";
import {  Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import Fitness from "../../views/workout_nav/Fitness";
import AtHome from "../../views/workout_nav/AtHome";
export default function Workout() {
  const screenOptions = ({ route }) => ({
    tabBarActiveTintColor: '#000000', // Change the active tab color
    tabBarInactiveTintColor: 'gray', // Change the inactive tab color
    tabBarIndicatorStyle: { backgroundColor: '#835AF8' }, // Change the color of the tab indicator
    tabBarStyle: { backgroundColor: 'white' }, // Change the background color of the tab bar
    tabBarLabelStyle: { fontWeight: 'bold' }, // Change the font weight of the tab label
    tabBarTabStyle: { borderBottomWidth: 0 }, // Remove the bottom border from all tabs
    // Add a bottom border to the active tab based on the route name
    tabBarLabel: ({ color }) => {
      return <Text style={[{ color, fontWeight: 'bold' }]}>{route.name}</Text>;
    },
    tabBarShowLabel: true,
  });
  return (

    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Гэртээ" independent={true}>
      <Tab.Screen name="Гэртээ" component={AtHome} options={{ headerShown: false, tabBarLabel:'Гэртээ' }} />
      <Tab.Screen name="Фитнеcc" component={Fitness} />
    </Tab.Navigator>
    )
}