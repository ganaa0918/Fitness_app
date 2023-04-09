import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
// Screens
import Home from "./screens/Home";
import Workout from "./screens/Workout";
import Activity from "./screens/Activity";
import Profile from "./screens/Profile";

//Screen names
const homename = 'Home';
const workoutname = 'Workout';
const profilename = 'Profile';
const activityname = 'Activity';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homename}
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#6A36FF',
          tabBarInactiveTintColor: '#CBB9FF',
          tabBarStyle: { padding: 5, height: 50 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homename) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === workoutname) {
              iconName = focused ? 'compass' : 'compass-outline';

            } else if (rn === activityname) {
              iconName = focused ? 'person' : 'person-outline';
            }
            else if (rn === profilename) {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        >
      <Tab.Screen name={homename} component={Home} />
      <Tab.Screen name={workoutname} component={Workout} />
      <Tab.Screen name={activityname} component={Activity} />
      <Tab.Screen name={profilename} component={Profile} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}
