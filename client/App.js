import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

import LoginNav from './navigation/login_nav';
import MainContainer from './navigation';
import Exercises from './views/workout_nav/Exercises';
import Costumize from './views/workout_nav/Costumize';
import UserScreen from './navigation/Workout_navs/UserScreen';
import FreTseej from './views/workout_nav/IsPremuim/FreTseej';
import PreTseej from './views/workout_nav/IsPremuim/PreTseej';
import Log from './views/ehlels/Log';
import Ehlel2 from './views/ehlels/Ehlel2';
import Ehlel1 from './views/ehlels/Ehlel1';

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
        <Stack.Screen name="Login_nav" component={LoginNav} options={{ headerShown: false, animation:'fade' }} />
        <Stack.Screen name="Exercises" component={Exercises} options={{ headerShown: false }} />
        <Stack.Screen name="Costumize" component={Costumize} options={{ headerShown: false }} />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{ headerShown: false }}
          initialParams={{ isPremiumUser }}
        />
        <Stack.Screen name="PreTseej" component={PreTseej} options={{ headerShown: false }} />
        <Stack.Screen name="FreTseej" component={FreTseej} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;