import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PreTseej from '../../views/workout_nav/IsPremuim/PreTseej';
import FreTseej from '../../views/workout_nav/IsPremuim/FreTseej';

const Stack = createNativeStackNavigator();

//Conditional Rendering
const UserScreen = ({  route }) =>{

    const { isPremuimUser } = route.params;
    const screens = [
        {
          name: 'Tseej',
          component: isPremuimUser ? PreTseej : FreTseej,
          options: { headerShown: false },
        },
      ];
    return (
        <Stack.Navigator>
          {screens.map(({ name, component, options }) => (
            <Stack.Screen key={name} name={name} component={component} options={options} />
          ))}
        </Stack.Navigator>
      );
}
export default UserScreen;