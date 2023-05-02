import React, {useState} from 'react'
import MainContainer from "./navigation"
import Login_nav from "./navigation/login_nav";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exercises from "./views/workout_nav/Exercises";
import Costumize from "./views/workout_nav/Costumize";
import UserScreen from "./navigation/Workout_navs/UserScreen";
import FreTseej from './views/workout_nav/IsPremuim/FreTseej';
import PreTseej from './views/workout_nav/IsPremuim/PreTseej';
import Log from './views/Log';
const Stack = createNativeStackNavigator()
function App(){
  const isPremuimUser = false
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Log" component={Log} options={{headerShown: false}} />
        <Stack.Screen name="Login_nav" component={Login_nav} options={{headerShown: false}} />
        <Stack.Screen name="Exercises" component={Exercises} options={{headerShown: false}} />
        <Stack.Screen name='Costumize' component={Costumize} options={{headerShown: false}}/>
        <Stack.Screen name="UserScreen" component={UserScreen} options={{headerShown: false}} initialParams={{ isPremuimUser}}/>
        <Stack.Screen name="PreTseej" component={PreTseej} options={{headerShown: false}} />
        <Stack.Screen name="FreTseej" component={FreTseej} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App