import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/useAuth';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import SigninScreen from '../screens/signin';
import SignupScreen from '../screens/signup';
import WelcomeScreen from '../screens/welcome';

const Stack = createNativeStackNavigator();

/*type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Profile: { userId: string };
};*/


//export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Rotas Privadas
const AppStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
};

// Rotas Públicas
const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={SigninScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={SignupScreen} />
      <Stack.Screen name="AppStack" component={AppStack} />
    </Stack.Navigator>
  );
};

//const AppNavigator: React.FC = () => {
export default function AppNavigator () {//
  const { tokenState } = useAuth();

  /*return (
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
  );*/
  return (
    <NavigationContainer>
      {
        !!tokenState ? <AppStack /> : <AuthStack />
      }
    </NavigationContainer>
  );
}//;

//export default AppNavigator;
