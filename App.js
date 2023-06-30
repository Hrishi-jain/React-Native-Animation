import React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import FrontPage from './FrontPage';



const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LOGIN" component={LoginPage} />
        <Stack.Screen name="Front" component={FrontPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default App;
