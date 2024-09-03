import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const WelcomeHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/images/bg1.png')}
        style={styles.headerImage}
      />
      <Text style={styles.title}>Bem-vindo ao Is.sues</Text>
      <Text style={styles.subtitle}>Escolha uma opção abaixo para começar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginVertical: 36,
  },
  headerImage: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#003366 ',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#929292',
    textAlign: 'center',
  },
});

export default WelcomeHeader;