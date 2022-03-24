import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/home';
import DetailScreen from '../pages/detail';

const Stack = createNativeStackNavigator();

export default class Routes extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Listagem" component={HomeScreen} />
          <Stack.Screen name="Detalhe" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
