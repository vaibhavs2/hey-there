import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../Screens/HomeScreen/HomeScreen';

const NavigationStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator>
        <NavigationStack.Screen name="Home" component={HomeScreen} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
}
