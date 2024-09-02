import React from 'react';
import {PaperProvider } from 'react-native-paper'
import WelcomeScreen from './src/screens/WelcomeScreen';

const App: React.FC = () => {
  return (
    <PaperProvider>
      <WelcomeScreen />
    </PaperProvider>
  );
};

export default App