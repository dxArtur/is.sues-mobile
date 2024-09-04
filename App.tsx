/*import React from 'react';
import { AuthProviderContext } from './src/app/contexts/AuthProvider';
import { Routes } from './src/app/routes';

const App: React.FC = () => {
  return (
    <AuthProviderContext>
      <Routes />
    </AuthProviderContext>
  );
};

export default App;*/


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthProviderContext} from './src/app/contexts/AuthProvider';
import AppNavigator from './src/app/navigation/AppNavigator';

export default function App() {
  return (
    <AuthProviderContext>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProviderContext>
  );
}

