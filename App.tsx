import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Slot } from 'expo-router';
import { AuthProvider } from './src/contexts/AuthContext';
import { IssuesProvider } from './src/contexts/IssuesContext';

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
