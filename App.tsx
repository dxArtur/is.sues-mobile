import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Slot } from 'expo-router';
import { AuthProvider } from './src/app/contexts/AuthContext';
import { IssuesProvider } from './src/app/contexts/IssuesContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <IssuesProvider>
        <PaperProvider>
          <Slot />
        </PaperProvider>
      </IssuesProvider>
    </AuthProvider>
  );
};

export default App;
