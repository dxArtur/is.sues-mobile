import React from "react";
import { useAuth } from "../hooks/useAuth";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrivateNavigator from "./PrivateNavigator";
import PublicNavigator from './PublicNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Private" component={PrivateNavigator} />
      ) : (
        <Stack.Screen name="Public" component={PublicNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
