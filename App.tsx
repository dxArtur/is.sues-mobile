import React from 'react';
import { AuthProviderContext } from './src/app/contexts/AuthProvider';
import { Routes } from './src/app/routes';

const App: React.FC = () => {
  return (
    <AuthProviderContext>
      <Routes />
    </AuthProviderContext>
  );
};

export default App;

