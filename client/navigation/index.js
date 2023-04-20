import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';
// Screens
import Home from "../views/Home";
import Workout from "../views/workout_nav";
import Activity from "../views/Activity";
import Profile from "../views/Profile";
import Login from "../views/Login";
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer independent={true}>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Workout') {
            iconName = 'dumbbell';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Activity') {
            iconName = 'chart-bar';
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderColor: 'blue',
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarActiveTintColor: '#6A36FF',
        tabBarInactiveTintColor: '#CBB9FF',
        tabBarLabelStyle: {
          display: 'none',
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'red', // Change this value to adjust the color of the active tab indicator
          height: 5, // Change this value to adjust the thickness of the active tab indicator
        },
      })}
    >
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Workout" component={Workout} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}
