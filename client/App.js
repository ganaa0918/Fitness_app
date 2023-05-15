import React, { useState, useEffect , useMemo} from 'react';
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
import  { UserContext }  from "./views/UsersContext";
import Info from './views/profileScreen/Info';
import History from './views/profileScreen/History';
import Dasgal from './views/workout_nav/Dasgal';
import Dasgal1 from './views/workout_nav/Dasgal1';
import Pushups from './views/workout_nav/Pushups';
import Rest from './views/workout_nav/Rest';
import Abs from './views/workout_nav/Abs';
import Order from './views/Order';
import Payment from './views/Payment';
import Done from './views/Done';
import News from './views/News';
const Stack = createNativeStackNavigator();

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [user, setUser] = useState();
  const ProviderValue = useMemo(() => ({user , setUser}), [user , setUser]);
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

  const [isPremuimUser, setIsPremiumUser] = useState(false)
  // const isPremuimUser = true;
  if (!appIsReady) {
    return null;
  }

  return (
    <UserContext.Provider value = {{user , setUser}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ehlel1" component={Ehlel1} options={{ headerShown: false, animation:'fade_from_bottom' }} />
        <Stack.Screen name="Ehlel2" component={Ehlel2} options={{ headerShown: false, animation:'fade' }} />
        <Stack.Screen name="Log" component={Log} options={{ headerShown: false, animation:'fade' }} />
        <Stack.Screen name="Order" component={Order} options={{ headerShown: false, animation:'fade' }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, animation:'fade' }} />
        <Stack.Screen name='Restore' component={Restore} options={{ headerShown: false }} />
        <Stack.Screen name="Exercises" component={Exercises} options={{ headerShown: false }} />
        <Stack.Screen name="Costumize" component={Costumize} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="BiyiinJin" component={BiyiinJin} options={{headerShown: false}} />
        <Stack.Screen name="BiyiinJin2" component={BiyiinJin2} options={{headerShown: false}} />
        <Stack.Screen name="BiyiinJin3" component={BiyiinJin3} options={{ headerShown: false }} />
        <Stack.Screen name="BiyiinJin4" component={BiyiinJin4} options={{ headerShown: false }} />
        <Stack.Screen name="UserScreen"component={UserScreen} options={{ headerShown: false }} initialParams={{ isPremuimUser }}/>
        <Stack.Screen name="PreTseej" component={PreTseej} options={{ headerShown: false }} />
        <Stack.Screen name="FreTseej" component={FreTseej} options={{ headerShown: false }} />
        <Stack.Screen name='MainContainer' component={MainContainer} options={{ headerShown: false }} />
        <Stack.Screen name='Info' component={Info} options={{ headerShown: false }} />
        <Stack.Screen name='History' component={History} options={{ headerShown: false }} />
        <Stack.Screen name='Dasgal' component={Dasgal} options={{ headerShown: false }} />
        <Stack.Screen name='Dasgal1' component={Dasgal1} options={{ headerShown: false }} />
        <Stack.Screen name='Pushups' component={Pushups} options={{ headerShown: false }} />
        <Stack.Screen name='Rest' component={Rest} options={{ headerShown: false }} />
        <Stack.Screen name='Abs' component={Abs} options={{ headerShown: false }} />
        {/* <Stack.Screen name='Payment' component={Payment} options={{ headerShown: false }} /> */}
        <Stack.Screen name='Payment' component={Payment} options={{ headerShown: false }} initialParams={{ setIsPremiumUser}} />
        <Stack.Screen name='Done' component={Done} options={{ headerShown: false }} />
        <Stack.Screen name='News' component={News} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;