import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocationScreen';
import MeteorScreen from './screens/MeteorScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='IssLocation' component={IssLocationScreen}/>
        <Stack.Screen name='Meteors' component={MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;


