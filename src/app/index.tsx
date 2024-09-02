import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import AuthButton from '../components/auth/AuthButtons';

export default function Index() {
  return (
    <ImageBackground
      source={require('../assets/images/bg1.png')} // Ajuste o caminho conforme necessário
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Is.sues</Text>
        <Text style={styles.subtitle}>@Is.sues</Text>
        <View style={styles.buttonContainer}>
          <AuthButton
            title="Sign in"
            link="/signin"
            style={styles.signInButton}
          />
          <AuthButton
            title="Sign up"
            link="/signup"
            style={styles.signUpButton}
          />
          <AuthButton 
            title="Create Issue" 
            link="/create-issue"
            twStyleButton="border border-green-500 shadow-lg shadow-green-500/50"
            twStylePlaceholder="text-green-500 shadow-lg"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  title: {
    paddingLeft: 16,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
  subtitle: {
    paddingLeft: 20,
    fontStyle: 'italic',
    color: '#B0B0B0',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 128,
    opacity: 0.8,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  signInButton: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'gray',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  signInButtonText: {
    color: 'white',
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'white',
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  signUpButtonText: {
    color: 'blue',
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});