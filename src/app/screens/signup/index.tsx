import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAuth } from '../../../contexts/AuthContext'; // Certifique-se de que este caminho está correto
import EmailInput from '@/src/components/input/EmailInput';
import PasswordInput from '@/src/components/input/PasswordInput';
import ConfirmPasswordInput from '@/src/components/input/ConfirmPasswordInput';
import NameInput from '@/src/components/input/NameInput';
import SigninButton from '@/src/components/Button/SigninButton'; // Reutilizando o botão de signin para signup


const SignupScreen: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signUp } = useAuth()


const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }
    try {
      await signUp(name, email, password);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cadastrar o usuário");
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subtitle}>Preencha os campos abaixo para se cadastrar</Text>
        <NameInput value={name} onChange={setName} />
        <EmailInput value={email} onChange={setEmail} />
        <PasswordInput value={password} onChange={setPassword} />
        <ConfirmPasswordInput value={confirmPassword} onChange={setConfirmPassword} />
        <SigninButton onPress={handleSignup} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'left',
    color: '#6b7280',
    marginBottom: 25,
  },
});

export default SignupScreen