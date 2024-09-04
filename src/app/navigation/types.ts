import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Profile: { userId: string };
};

export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;
