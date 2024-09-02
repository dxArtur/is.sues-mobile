import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import WelcomeHeader from '../components/common/WelcomeHeader';
import WelcomeButton from '../components/common/WelcomeButton';
import WelcomeLink from '../components/common/WelcomeLink';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';


const WelcomeScreen: React.FC = () => {

const navigation = useNavigation()

  const handleSignin = () => {
    // Implement navigation to signin screen
    
  };

  const handleSignup = () => {
    // Implement navigation to signup screen
    console.log('Signup pressed');
  };

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
            link='/screens/signin'
            title="Já é um usuário?"
            backgroundColor="#98ff98"
            textColor="#006400"
            onPress={handleSignin}
          />
          <WelcomeButton
            link='/Signup'
            title="Sou novo na empresa"
            backgroundColor="#e0e0e0"
            textColor="#006400"
            onPress={handleSignup}
          />
          <WelcomeLink
            title="Traga a sua empresa para o Is.sues"
            // textColor="#FF5722"
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