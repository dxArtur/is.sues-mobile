import signup from "@/src/app/screens/signup";
import signin from '@/src/app/screens/signin'
import welcome from '@/src/app/screens/welcome'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

const PulbicNavigator: React.FC = () => {
  return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen 
                name='Welcome' 
                component={welcome}
            />
            <Stack.Screen 
                name='Login' 
                component={signin}
            />

            <Stack.Screen 
                name='Register' 
                component={signup}
            />
        
        </Stack.Navigator>
  )
};

export default PulbicNavigator