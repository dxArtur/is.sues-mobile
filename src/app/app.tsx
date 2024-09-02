import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import {PaperProvider } from 'react-native-paper'

const App: React.FC = () => {
  return (
    <PaperProvider>
      <WelcomeScreen />
    </PaperProvider>
  );
};

export default App