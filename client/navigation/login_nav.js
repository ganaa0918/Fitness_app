import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/Login';
import Restore from '../views/Restore';
import MainContainer from '.';
const Stack = createNativeStackNavigator();

function Login_nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Restore" component={Restore} options={{ headerShown: false }} />
        <Stack.Screen name="MainContainer" component={MainContainer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Login_nav