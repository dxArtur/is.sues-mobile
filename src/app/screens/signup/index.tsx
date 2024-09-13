import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAuth } from '../../hooks/useAuth'; // Certifique-se de que este caminho está correto
import EmailInput from '@/src/components/input/EmailInput';
import PasswordInput from '@/src/components/input/PasswordInput';
import ConfirmPasswordInput from '@/src/components/input/ConfirmPasswordInput';
import NameInput from '@/src/components/input/NameInput';
import OccupationInput from '@/src/components/input/OccupationInput';
import SignupButton from '@/src/components/Button/SignupButton';
import Checkbox from '@/src/components/common/Checkbox';
import AuthButton from '@/src/components/Button/AuthButton';


const SignupScreen: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signUp } = useAuth()

    const handleCheckboxPress = () => {
        setIsAdmin(!isAdmin)
      };


const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }
    try {
      await signUp(name, occupation, email, password, isAdmin);
    } catch (error) {
        console.log(error);
        Alert.alert("Erro", "Não foi possível cadastrar o usuário");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subtitle}>Preencha os campos abaixo para se cadastrar</Text>
        <NameInput value={name} onChange={setName} />
        <EmailInput value={email} onChange={setEmail} />
        <OccupationInput value={occupation} onChange={setOccupation}/>
        <PasswordInput value={password} onChange={setPassword} />
        <ConfirmPasswordInput value={confirmPassword} onChange={setConfirmPassword} />
        <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>
          Você é um administrador?
        </Text>
        <Checkbox
          status={isAdmin ? 'checked' : 'unchecked'}
          onPress={handleCheckboxPress}
          color="#6200ee"
          uncheckedColor="#000000"
        />
        
      </View>
      <AuthButton
            title="Cadastrar"
            backgroundColor="#98ff98"
            textColor="#003366"
            onPress={handleSignup} // Navega para a tela de cadastro
          />
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  }
});

export default SignupScreen