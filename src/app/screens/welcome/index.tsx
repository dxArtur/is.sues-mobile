import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import WelcomeHeader from '@/src/components/common/WelcomeHeader';
import WelcomeButton from '@/src/components/common/WelcomeButton';
import WelcomeLink from '@/src/components/common/WelcomeLink';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProp } from '../../navigation/types';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<AppNavigationProp>(); // Hook de navegação

  const handleCompanyIssues = () => {
    // Implement navigation to company issues screen
    console.log('Company issues pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <WelcomeHeader />
        <View style={styles.buttonsContainer}>
          <WelcomeButton
            title="Já é um usuário?"
            backgroundColor="#98ff98"
            textColor="#003366"
            onPress={() => navigation.navigate('Login')} // Navega para a tela de login
          />
          <WelcomeButton
            title="Sou novo na empresa"
            backgroundColor="#e0e0e0"
            textColor="#2E3A43"
            onPress={() => navigation.navigate('Register')} // Navega para a tela de cadastro
          />
          <WelcomeLink
            title="Traga a sua empresa para o Is.sues"
            onPress={handleCompanyIssues}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    marginTop: 32,
  },
});

export default WelcomeScreen;
