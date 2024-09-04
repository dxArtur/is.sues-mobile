import React from 'react';
import AppNavigator from './src/app/navigation/StackNavigator'; 
import { AuthProviderContext } from './src/app/contexts/AuthProvider';

export default function App () {
  return (
    <AuthProviderContext>
      <AppNavigator />
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

