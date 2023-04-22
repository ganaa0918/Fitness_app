import * as React from "react"
import MainContainer from "./navigation"
import Login_nav from "./navigation/login_nav";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exercises from "./views/workout_nav/Exercises";
const Stack = createNativeStackNavigator()
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login_nav" component={Login_nav} options={{headerShown: false}} />
        <Stack.Screen name="Exercises" component={Exercises} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App