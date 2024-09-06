import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/signin';
import SignUpScreen from '../screens/signup';

const PublicStack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen name="SignIn" component={SignInScreen} />
      <PublicStack.Screen name="SignUp" component={SignUpScreen} />
    </PublicStack.Navigator>
  );
}
