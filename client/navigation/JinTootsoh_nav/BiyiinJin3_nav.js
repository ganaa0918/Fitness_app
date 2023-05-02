import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../views/Login';
import Restore from '../../views/Restore';
import SignUp from '../../views/SignUp';
import BiyiinJin from '../../views/JinTootsoh/BiyiinJin';
import BiyiinJin2 from '../../views/JinTootsoh/BiyiinJin2';
import BiyiinJin3 from '../../views/JinTootsoh/BiyiinJin3';
import BiyiinJin4 from '../../views/JinTootsoh/BiyiinJin4';
import MainContainer from '..';
const Stack = createNativeStackNavigator();

function BiyiinJin3_nav({ navigation, route }) {
  return (
      <Stack.Navigator initialRouteName="BiyiinJin3">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Restore" component={Restore} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="BiyiinJin" component={BiyiinJin} options={{ headerShown: false }} />
        <Stack.Screen name="BiyiinJin2" component={BiyiinJin2} options={{ headerShown: false }} />
        <Stack.Screen name="BiyiinJin3" component={BiyiinJin3} options={{ headerShown: false }} />
        <Stack.Screen name="BiyiinJin4" component={BiyiinJin4} options={{ headerShown: false }} />
        <Stack.Screen name="MainContainer" component={MainContainer} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

export default BiyiinJin3_nav