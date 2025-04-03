import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import Home from './screens/home';
import Habitx from './screens/habitx';
import EditHabit from './screens/EditHabit'; 
import Card from './screens/card';
import Detalhes from './screens/detalhes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Habitx" component={Habitx} options={{ headerShown: false }} />
        <Stack.Screen name="EditHabit" component={EditHabit} options={{ headerShown: false }} /> 
        <Stack.Screen name="Detalhes" component={Detalhes} options={{ headerShown: false }}/>
        <Stack.Screen name="Card" component={Card} options={{ headerShown: false }}/>
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
