import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from "@/src/app/screens/signup";
import Signin from '@/src/app/screens/signin';
import Welcome from '@/src/app/screens/welcome';

const Stack = createNativeStackNavigator();

const PublicNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Signin} />
      <Stack.Screen name="Register" component={Signup} />
    </Stack.Navigator>
  );
};

export default PublicNavigator;
