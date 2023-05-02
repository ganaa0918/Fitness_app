import * as React from "react"
import MainContainer from "./navigation"
import Login_nav from "./navigation/login_nav";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exercises from "./views/workout_nav/Exercises";
import SignUp_nav from "./navigation/SignUp_nav";
import BiyiinJin_nav from "./navigation/JinTootsoh_nav/BiyiinJin_nav";
import BiyiinJin2_nav from "./navigation/JinTootsoh_nav/BiyiinJin2_nav";
import BiyiinJin3_nav from "./navigation/JinTootsoh_nav/BiyiinJin3_nav";
import BiyiinJin4_nav from "./navigation/JinTootsoh_nav/BiyiinJin4_nav";
const Stack = createNativeStackNavigator()
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login_nav" component={Login_nav} options={{headerShown: false}} />
        <Stack.Screen name="Exercises" component={Exercises} options={{headerShown: false}} />
        <Stack.Screen name="SignUp_nav" component={SignUp_nav} options={{headerShown: false}} />
        <Stack.Screen name="BiyiinJin_nav" component={BiyiinJin_nav} options={{headerShown: false}} />
        <Stack.Screen name="BiyiinJin2_nav" component={BiyiinJin2_nav} options={{headerShown: false}} />
        <Stack.Screen name="BiyiinJin3_nav" component={BiyiinJin3_nav} options={{ headerShown: false }} />
        <Stack.Screen name="BiyiinJin4_nav" component={BiyiinJin4_nav} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App