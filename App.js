import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './pages/Start'
import IntroFirst from './pages/Intro1';
import IntroSecond from './pages/Intro2';
import IntroThird from './pages/Intro3';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Intro-1"
          component={IntroFirst}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Intro-2"
          component={IntroSecond}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Intro-3"
          component={IntroThird}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  )
}