import {createNativeStackNavigator} from '@react-navigation/native-stack'

import signin from '@/src/app/screens/signin';
import signup from '@/src/app/screens/signup';
import HomeScreen from '../screens/feed';
import ProfileScreen from '../screens/profile';

const Stack = createNativeStackNavigator();

const PrivateStackNavigator: React.FC = () =>{
  return (
    
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    
  );
}

export default PrivateStackNavigator