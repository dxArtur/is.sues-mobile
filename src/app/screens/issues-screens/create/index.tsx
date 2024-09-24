import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TestPage: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Página de Teste</Text>
        <Text style={styles.description}>Esta é uma página de teste para verificar a navegação no expo-router.</Text>

        <Button title="Voltar" onPress={handleGoBack} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default TestPage;
