import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

import MainContainer from './navigation';
import Exercises from './views/workout_nav/Exercises';
import Costumize from './views/workout_nav/Costumize';
import UserScreen from './navigation/Workout_navs/UserScreen';
import FreTseej from './views/workout_nav/IsPremuim/FreTseej';
import PreTseej from './views/workout_nav/IsPremuim/PreTseej';
import Log from './views/ehlels/Log';
import Ehlel2 from './views/ehlels/Ehlel2';
import Ehlel1 from './views/ehlels/Ehlel1';
import SignUp from './views/SignUp';
import BiyiinJin from './views/JinTootsoh/BiyiinJin';
import BiyiinJin2 from './views/JinTootsoh/BiyiinJin2';
import BiyiinJin3 from './views/JinTootsoh/BiyiinJin3';
import BiyiinJin4 from './views/JinTootsoh/BiyiinJin4';
import Login from './views/Login'
import Restore from './views/Restore';
import Info from './views/profileScreen/Info';
import History from './views/profileScreen/History';
const Stack = createNativeStackNavigator();

function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Wait for some time to simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync({ animation:'fade_from_bottom' });
      }
    };
    prepareApp();
  }, []);

  const isPremiumUser = false;

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ehlel1" component={Ehlel1} options={{ headerShown: false, animation:'fade_from_bottom' }} />
        <Stack.Screen name="Ehlel2" component={Ehlel2} options={{ headerShown: false, animation:'fade' }} />
        <Stack.Screen name="Log" component={Log} options={{ headerShown: false, animation:'fade' }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, animation:'fade' }} />
        <Stack.Screen name='Restore' component={Restore} options={{ headerShown: false }} />
        <Stack.Screen name="Exercises" component={Exercises} options={{ headerShown: false }} />
        <Stack.Screen name="Costumize" component={Costumize} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="BiyiinJin" component={BiyiinJin} options={{headerShown: false}} />
        <Stack.Screen name="BiyiinJin2" component={BiyiinJin2} options={{headerShown: false}} />
        <Stack.Screen name="BiyiinJin3" component={BiyiinJin3} options={{ headerShown: false }} />
        <Stack.Screen name="BiyiinJin4" component={BiyiinJin4} options={{ headerShown: false }} />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{ headerShown: false }}
          initialParams={{ isPremiumUser }}
        />
        <Stack.Screen name="PreTseej" component={PreTseej} options={{ headerShown: false }} />
        <Stack.Screen name="FreTseej" component={FreTseej} options={{ headerShown: false }} />
        <Stack.Screen name='MainContainer' component={MainContainer} options={{ headerShown: false }} />
        <Stack.Screen name='Info' component={Info} options={{ headerShown: false }} />
        <Stack.Screen name='History' component={History} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;