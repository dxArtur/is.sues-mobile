import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/useAuth';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import SigninScreen from '../screens/signin';
import SignupScreen from '../screens/signup';
import WelcomeScreen from '../screens/welcome';
import CriarEmpresa from '../screens/company/create';
import DetalhesDaEmpresaDescrio from '../screens/company/detail';
import CompanyManagementScreen from '../screens/company/manage';
import EditarEmpresa from '../screens/company/edit';
import CriarDepartamento from '../screens/department/create';
import EditarDepartamentos from '../screens/department/edit';
import DeletarDepartamentos from '../screens/department/delete';
import CriarFuncionario from '../screens/usermanager/create';
import EditarFuncionario from '../screens/usermanager/edit';
import SelecionarFuncionarioParaEditar from '../screens/usermanager/select';
import DeletarFuncionario from '../screens/usermanager/delete';
import CriarLabel from '../screens/label/create';
import EditarLabel from '../screens/label/edit';
import DeletarLabel from '../screens/label/delete';
import UpdateProfilePictureScreen from '../screens/usermanager/profile-picture';
import CreateIssues from '../screens/issues/create';
import { FontAwesome, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import MyIssuesScreen from '../screens/issues/myIssues';
import SelectDepartmentScreen from '../screens/department/select';
import DepartmentDetailsScreen from '../screens/department/detail';
import EditIssuesScreen from '../screens/issues/edit';
import DetailIssueScreen from '../screens/issues/detail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack para a aba Home
/*const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetalhesDaEmpresa" component={DetalhesDaEmpresaDescrio} />
      <Stack.Screen name="EditarEmpresa" component={EditarEmpresa} />
      <Stack.Screen name="CriarDepartamento" component={CriarDepartamento} />
      <Stack.Screen name="DetailIssues" component={IssueDetailScreen} />
    </Stack.Navigator>
  );
};*/
const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailIssues" component={DetailIssueScreen} />
      <Stack.Screen name="EditIssues" component={EditIssuesScreen} />
      {/* Outras telas */}
    </Stack.Navigator>
  );
};

const CompanyStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="DetalhesDaEmpresa" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DetalhesDaEmpresa" component={DetalhesDaEmpresaDescrio} />
      <Stack.Screen name="EditarEmpresa" component={EditarEmpresa} />
      <Stack.Screen name="CriarDepartamento" component={CriarDepartamento} />
      <Stack.Screen name="EditarDepartamentos" component={EditarDepartamentos} />
      <Stack.Screen name="DeletarDepartamentos" component={DeletarDepartamentos} />
      <Stack.Screen name="CriarFuncionario" component={CriarFuncionario} />
      <Stack.Screen name="EditarFuncionario" component={EditarFuncionario} />
      <Stack.Screen name="SelecionarFuncionarioParaEditar" component={SelecionarFuncionarioParaEditar} />
      <Stack.Screen name="DeletarFuncionario" component={DeletarFuncionario} />
      <Stack.Screen name="CriarLabel" component={CriarLabel} />
      <Stack.Screen name="EditarLabel" component={EditarLabel} />
      <Stack.Screen name="DeletarLabel" component={DeletarLabel} />
      <Stack.Screen name="SelectDepartment" component={SelectDepartmentScreen} />
      <Stack.Screen name="DepartmentDetails" component={DepartmentDetailsScreen} />
      <Stack.Screen name="ManageCompany" component={CompanyManagementScreen} />
    </Stack.Navigator>
  );
};

// Stack para a aba de criar issues
const CreateIssueStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="CreateIssues" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreateIssues" component={CreateIssues} />
    </Stack.Navigator>
  );
};

// Stack para a aba de issues do usuário
const IssuesStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="MyIssues" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyIssues" component={MyIssuesScreen} />
      <Stack.Screen name="EditIssues" component={EditIssuesScreen} />
      
    </Stack.Navigator>
  );
};

/* const DetailIssueStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="DetailIssues" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DetailIssues" component={IssueDetailScreen} />
    </Stack.Navigator>
  );
}; */

// Stack para a aba Perfil
const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="UpdateProfilePictureScreen" component={UpdateProfilePictureScreen} />
    </Stack.Navigator>
  );
};

// Definição do AppStack com abas e suas stacks
const AppStack: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#003366', // Cor da aba ativa
        tabBarInactiveTintColor: '#8e8e8e', // Cor da aba inativa
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 0,
          marginTop:8,
        },
        tabBarLabelStyle: {
          textAlign: 'center',
          fontSize: 12,
          fontWeight: '400',
          marginBottom: 4,
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="CompanyStack"
        component={CompanyStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="building" size={22} color={color} />
          ),
          tabBarLabel: 'Empresa',
        }}
      />
      <Tab.Screen
        name="CreateIssueStack"
        component={CreateIssueStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus-square-o" size={24} color={color} />
          ),
          tabBarLabel: 'Criar Issue',
        }}
      />
      <Tab.Screen
        name="MyIssuesStack"
        component={IssuesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="tasks" size={24} color={color} />
          ),
          tabBarLabel: 'Minhas Issues',
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
          tabBarLabel: 'Perfil',
        }}
      />
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
      <Stack.Screen name="CriarEmpresa" component={CriarEmpresa} />
    </Stack.Navigator>
  );
};

// Definindo qual Stack exibir
/*export default function AppNavigator() {
  const { tokenState } = useAuth();
  return (
    <NavigationContainer>
      {!!tokenState ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}*/
// Definindo qual Stack exibir
export default function AppNavigator() {
  const { user, tokenState, companyId } = useAuth();

  if (!tokenState) {
    // Se o usuário não estiver autenticado, exibe a AuthStack
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  }

  // Verifica se o usuário tem `companyId` ou `departmentId`
  if (!companyId && !user?.departmentId) {
    // Redireciona para a tela de criar empresa se o usuário não estiver associado a uma empresa ou departamento
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
            name="CriarEmpresa" 
            component={CriarEmpresa} 
            initialParams={{ headid: user?.id }} // Passa o headid aqui
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  // Se o usuário está autenticado e tem `companyId` ou `departmentId`, exibe o AppStack
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}