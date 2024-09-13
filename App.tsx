import React from 'react';
import { useFonts } from "expo-font";
import AppNavigator from './src/app/navigation/StackNavigator'; 
import { AuthProviderContext } from './src/app/contexts/AuthProvider';
import { IssuesProvider } from './src/app/contexts/IssuesContext'
import {PaperProvider, useTheme } from 'react-native-paper';
import theme from './src/styles/theme';
import { ThemeProvider } from './src/app/contexts/ThemeContext';

import { CompanyProvider } from './src/app/contexts/CompanyContext';
import { DepartmentProvider } from './src/app/contexts/DepartmentContext';

export default function App () {

  const [fontsLoaded, error] = useFonts({
    "PlusJakartaSans-Medium": require("./src/assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-SemiBold": require("./src/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "PlusJakartaSans-Bold": require("./src/assets/fonts/PlusJakartaSans-Bold.ttf"),
    "SFProText-Semibold": require("./src/assets/fonts/SFProText-Semibold.otf"),
    "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./src/assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <AuthProviderContext>
      <CompanyProvider>
        <DepartmentProvider>
          <IssuesProvider>
            <AppNavigator />
          </IssuesProvider>
        </DepartmentProvider>
      </CompanyProvider>
    </AuthProviderContext>
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

