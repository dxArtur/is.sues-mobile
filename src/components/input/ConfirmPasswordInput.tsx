import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface ConfirmPasswordInputProps {
  value: string;
  onChange: (text: string) => void;
}

const ConfirmPasswordInput: React.FC<ConfirmPasswordInputProps> = ({ value, onChange }) => {
  return (
    <TextInput
      label="Confirmar a sua senha"
      value={value}
      onChangeText={onChange}
      secureTextEntry
      style={styles.input}
      placeholderTextColor='#6b7280'
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
});

export default ConfirmPasswordInput