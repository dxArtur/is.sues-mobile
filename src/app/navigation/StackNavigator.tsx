import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/useAuth';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import SigninScreen from '../screens/signin';
import SignupScreen from '../screens/signup';
import WelcomeScreen from '../screens/welcome';
import CriarEmpresa from '../screens/company/create'; // Tela de criação de empresa
import BuscarEmpresas from '../screens/company/search';
import DetalhesDaEmpresaDescrio from '../screens/company/detail';
import EditarEmpresa from '../screens/company/edit';
import CriarDepartamento from '../screens/department/create';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Rotas Privadas com navegação empilhada
const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CriarEmpresa" component={CriarEmpresa} />
      <Stack.Screen name="BuscarEmpresas" component={BuscarEmpresas} />
      <Stack.Screen name="DetalhesDaEmpresa" component={DetalhesDaEmpresaDescrio} />
      <Stack.Screen name="EditarEmpresa" component={EditarEmpresa} />
      <Stack.Screen name="CriarDepartamento" component={CriarDepartamento} />
      {/* Adicione outras rotas do Stack aqui */}
    </Stack.Navigator>
  );
};

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      {/* Adicione outras rotas do Stack aqui */}
    </Stack.Navigator>
  );
};

// Rotas Privadas com navegação por abas
const AppStack: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

// Rotas Públicas
const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={SigninScreen} />
      <Stack.Screen name="Register" component={SignupScreen} />
    </Stack.Navigator>
  );
};

// Definindo qual Stack exibir
export default function AppNavigator() {
  const { tokenState } = useAuth();
  return (
    <NavigationContainer>
      {!!tokenState ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
