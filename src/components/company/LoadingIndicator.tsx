import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Color } from '@/GlobalStyles';

interface LoadingIndicatorProps {
  message?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ message = 'Carregando...' }) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={Color.primaryRegular} />
      <Text style={styles.loadingText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 18,
    color: Color.primaryRegular,
  },
});

export default LoadingIndicator;
