import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useAuth } from '../../hooks/useAuth';
import SigninButton from '@/src/components/Button/SigninButton';
import EmailInput from '@/src/components/input/EmailInput';
import PasswordInput from '@/src/components/input/PasswordInput';
import { useNavigation, CommonActions } from '@react-navigation/native';
import AuthButton from '@/src/components/Button/AuthButton';

const SigninScreen: React.FC = () => {
  const { colors } = useTheme()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signOut,  user, companyId } = useAuth(); //Hook de autenticação
  const navigation = useNavigation(); // Hook de navegação

  // const handleSignin = async () => {
  //   try {
  //     const { userData, companyId } = await signIn(email, password); // Executa o login e aguarda o retorno
  //     console.log("Resultado do signin:", userData);
      
  //     // Verifica se o usuário foi retornado corretamente
  //     if (!userData?.id) {
  //       throw new Error("Usuário não encontrado após login");
  //     }
  
  //     console.log("ID do usuário:", userData.id);
  //     console.log("companyId:", companyId);
  //     console.log("departmentId:", userData.departmentId);
  
  //     // Verifica se o usuário está associado a uma empresa ou departamento
  //     if (companyId) {
  //       // Se o usuário é chefe de uma empresa
  //       navigation.navigate('Home'); // Navega para a página Home
  //     } else if (userData.departmentId) {
  //       // Se o usuário está associado a um departamento
  //       navigation.navigate('Home'); // Também navega para Home
  //     } else {
  //       // Caso o usuário não tenha empresa ou departamento, redireciona para criar empresa
  //       console.log("Usuário não tem empresa nem departamento. Redirecionando para CriarEmpresa.");
  //       navigation.navigate('CriarEmpresa', { headid: userData.id }); // Passa o headid para a criação da empresa
  //     }
  //   } catch (error) {
  //     Alert.alert("Erro", "Credenciais inválidas");
  //     console.log("Erro ao fazer login:", error);
  //     console.log("Credenciais:", { email, password });
  //   }
  // }; 
  const handleSignin = async () => {
    try {
      const { userData, companyId } = await signIn(email, password); // Executa o login e aguarda o retorno
  
      console.log("Resultado do signin:", userData);
      console.log("ID do usuário:", userData.id);
      console.log("companyId:", companyId);
      console.log("departmentId:", userData.departmentId);

      const userid = userData.id;
  
      // Verifica se o usuário está associado a uma empresa ou departamento
      if (companyId && companyId !== null) {
        // Se o usuário é chefe de uma empresa
        console.log("Usuário é chefe de uma empresa. Redirecionando para Home.");
        navigation.navigate('Home'); // Navega para a página Home
      } else if (userData.departmentId && userData.departmentId !== null) {
        // Se o usuário está associado a um departamento
        console.log("Usuário está associado a um departamento. Redirecionando para Home.");
        navigation.navigate('Home'); // Também navega para Home
      } else {
        // Caso o usuário não tenha empresa ou departamento, redireciona para criar empresa
        console.log("Usuário não tem empresa nem departamento. Redirecionando para CriarEmpresa.");
        // Passa o headid para a criação da empresa
        signOut();
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'CriarEmpresa', params: { headid: userid } }],
          })
        );
      }
    } catch (error) {
      Alert.alert("Erro", "Credenciais inválidas");
      console.log("Erro ao fazer login:", error);
      console.log("Credenciais:", { email, password });
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
          <AuthButton
            title="Entrar"
            backgroundColor={"#98ff98"} //"#98ff98"
            textColor="#003366"
            onPress={handleSignin} // Navega para a tela de cadastro
          />
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
