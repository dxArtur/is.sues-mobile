import React from "react"
import { useAuth } from "../hooks/useAuth"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrivateStack from "./PrivateNavigator"
import PublicStack from './PlubicNavigator'


const Stack = createNativeStackNavigator()

const AppNavigator: React.FC = ()=> {
    const userAuth = useAuth()

    return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                { userAuth ? (
                    <Stack.Screen name="Private" component={PrivateStack} />
                ):(
                    <Stack.Screen name="Public" component={PublicStack} />
                )}
            </Stack.Navigator>
    )
}

export default AppNavigator