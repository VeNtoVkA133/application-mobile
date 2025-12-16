import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/router/Router';
import Calculator from '@/src/calculator';
import Clicker from '@/src/clicker';
import gameCheckers from '@/src/gameCheckers';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Calculator" component={Calculator} />
          <Stack.Screen name="Clicker" component={Clicker} />
          <Stack.Screen name="gameCheckers" component={gameCheckers} />

        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>

  );
}
