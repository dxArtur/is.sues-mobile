import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAuth } from '../../hooks/useAuth';
import SigninButton from '@/src/components/Button/SigninButton';
import EmailInput from '@/src/components/input/EmailInput';
import PasswordInput from '@/src/components/input/PasswordInput';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProp } from '../../navigation/types';

const SigninScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth(); //Hook de autenticação
  const navigation = useNavigation<AppNavigationProp>(); // Hook de navegação

  const handleSignin = async () => {
    try {
      await signIn(email, password);
      navigation.navigate('Home'); // Navegação após login bem-sucedido
    } catch (error) {
      Alert.alert("Erro", "Credenciais inválidas");
      console.log(error);
      console.log(email);
      console.log(password);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Que bom tê-lo de volta</Text>
        <Text style={styles.subtitle}>Preencha os campos para entrar no is.sues</Text>
        <View style={styles.buttonsContainer}>
          <EmailInput value={email} onChange={setEmail} />
          <PasswordInput value={password} onChange={setPassword} />
          <SigninButton onPress={handleSignin} />
        </View>
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
    marginBottom: 8,
  },
  buttonsContainer: {
    marginTop: 32
  }
});

export default SigninScreen;
