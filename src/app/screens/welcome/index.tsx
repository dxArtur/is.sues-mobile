import React from 'react';
import { SafeAreaView, StyleSheet, View,Button } from 'react-native';
import WelcomeHeader from '@/src/components/common/WelcomeHeader';
import WelcomeButton from '@/src/components/common/WelcomeButton';
import WelcomeLink from '@/src/components/common/WelcomeLink';
import { useNavigation, useTheme } from '@react-navigation/native';


const WelcomeScreen: React.FC = () => {
  

  const navigation = useNavigation(); 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <WelcomeHeader />
        <View style={styles.buttonsContainer}>
          <WelcomeButton
            title="Já é um usuário?"
            backgroundColor={"#98ff98"} 
            textColor="#003366"
            onPress={() => navigation.navigate('Login')} 
          />
          <WelcomeButton
            title="Quero cadastrar minha empresa"
            backgroundColor="#e0e0e0"
            textColor="#2E3A43"
            onPress={() => navigation.navigate('Register')} 
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
