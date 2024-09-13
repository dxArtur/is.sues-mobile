import React from 'react';
import AppNavigator from './src/app/navigation/StackNavigator'; 
import { AuthProviderContext } from './src/app/contexts/AuthProvider';
import { IssuesProvider } from './src/app/contexts/IssuesContext'
import {PaperProvider, useTheme } from 'react-native-paper';
import theme from './src/styles/theme';
import { ThemeProvider } from './src/app/contexts/ThemeContext';


export default function App () {

  return (
    <ThemeProvider theme={theme}>
      <AuthProviderContext>
        <IssuesProvider>
        <AppNavigator />
        </IssuesProvider>
      </AuthProviderContext>
    </ThemeProvider>
  );
}//;

//export default App;

/*import React from 'react';
import MainNavigator from './src/app/navigation/MainNavigator'; // Ajuste o caminho conforme necessário
import { enableScreens } from 'react-native-screens';
enableScreens();


export default function App() {
  return <MainNavigator />;
}*/


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


/*import React from 'react';
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
}*/

