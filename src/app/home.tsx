import { View, Text, Button } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { signOut, user } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem vindo, {user?.name}</Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
}
