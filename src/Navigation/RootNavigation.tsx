import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Mapbox from '@rnmapbox/maps';
import {REACT_APP_MAPBOX_TOKEN} from '@env';

import {HomeScreen} from '../Screens/HomeScreen/HomeScreen';
import {MapScreen} from '../Screens/MapScreen/MapScreen';
import {RootStackParamList} from '../types/NavigationTypes';
import {ChatListScreen} from '../Screens/ChatListScreen/ChatListScreen';
import {ChatScreen} from '../Screens/ChatScreen/ChatScreen';

Mapbox.setAccessToken(REACT_APP_MAPBOX_TOKEN);

const NavigationStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationStack.Navigator screenOptions={{headerShown: false}}>
          <NavigationStack.Screen name="Home" component={HomeScreen} />
          <NavigationStack.Screen name="ChatScreen" component={ChatScreen} />
          <NavigationStack.Screen name="MapScreen" component={MapScreen} />
          <NavigationStack.Screen
            name="ChatListScreen"
            component={ChatListScreen}
          />
        </NavigationStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
