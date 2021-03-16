import 'react-native-gesture-handler';
import React, { Component } from 'react';
import ClientProfile from './src/Movil/Vistas/ClientProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/Stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <ClientProfile />
      </NavigationContainer>
    );
  }
}
