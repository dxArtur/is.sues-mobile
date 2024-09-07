import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Importar suas telas
import WelcomeScreen from '../screens/welcome/index'
import SigninScreen from '../screens/signin';
import SignupScreen from '../screens/signup';

const Stack = createStackNavigator();

const AppNav = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Welcome" >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav