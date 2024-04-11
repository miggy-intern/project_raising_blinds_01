import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient'; 
import Homescreen from './Screens/HomeScreen';
import ListScreen from './Screens/ListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="List"
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackground: () => (
          <LinearGradient
            colors={['#f066ff', '#6232E7']} 
            start={{ x: 0, y: 0.5 }} 
            end={{ x: 1, y: 0.5 }}  
            style={StyleSheet.absoluteFill}
          />
            ),
          }}>
          <Stack.Screen
            name="Home"
            component={Homescreen}
            options={{ title: 'Home' }} 
          />
          <Stack.Screen name="List" component={ListScreen} options={{ title: 'Raise Blinds' }}  />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
