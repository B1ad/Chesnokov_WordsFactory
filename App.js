import AppLoading from 'expo-app-loading';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './pages/Start'
// import { useFontsHook } from './hooks/useFonts';
import IntroFirst from './pages/Intro1';
import IntroSecond from './pages/Intro2';
import IntroThird from './pages/Intro3';
import SignUp from './pages/SignUp';
import Dictionary from './pages/Dict';
import Training from './pages/Training'
import Video from './pages/Video'

const Stack = createStackNavigator();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'rubik-bold': Rubik_700Bold,
  //   'rubik-medium': Rubik_500Medium,
  //   'rubik-regular': Rubik_400Regular,
  // })
  // const [fontsLoaded] = useFonts({
  //   'rubik-bold': require('./assets/fonts/Rubik-Bold.ttf'),
  //   'rubik-medium': require('./assets/fonts/Rubik-Medium.ttf'),
  //   'rubik-regular': require('./assets/fonts/Rubik-Regular.ttf'),
  // });

  // if (!fontsLoaded) { 
  //   console.log('пошел нахуй')
  //   return <AppLoading />
  // }

  // const LoadFonts = async () => {
  //   await useFontsHook();
  // };

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
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dictionary"
          component={Dictionary}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Video"
          component={Video}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Training"
          component={Training}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  )

  // return (
  //   <Start/>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
