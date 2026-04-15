import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/router/Router';
import Calculator from '@/src/Pages/calculator';
import Clicker from '@/src/Pages/clicker';
import gameCheckers from '@/src/Pages/gameCheckers';
import Lift from '@/src/Pages/Lift';
import shakerSort from '@/src/Pages/shakerSort';
import cafeMachine from '@/src/Pages/cafeMachine';
import PeacefulRooks from '@/src/Pages/PeacefulRooks';
import WeatherApp from '@/src/Pages/WeatherApp';
import C3pgame from '@/src/Pages/c3pgame'
import graph from '@/src/Pages/graph'





const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="WeatherApp" component={WeatherApp} />
          <Stack.Screen name="Calculator" component={Calculator} />
          <Stack.Screen name="Clicker" component={Clicker} />
          <Stack.Screen name="gameCheckers" component={gameCheckers} />
          <Stack.Screen name="Lift" component={Lift} />
          <Stack.Screen name="shakerSort" component={shakerSort} />
          <Stack.Screen name="cafeMachine" component={cafeMachine} />
          <Stack.Screen name="PeacefulRooks" component={PeacefulRooks} />
          <Stack.Screen name="C3pgame" component={C3pgame} />
          <Stack.Screen name="graph" component={graph} />

        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>

  );
}
