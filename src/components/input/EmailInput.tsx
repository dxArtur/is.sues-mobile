import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';

interface EmailInputProps {
  value: string;
  onChange: (text: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  return (
    <PaperTextInput
      label="Digite seu email"
      value={value}
      onChangeText={onChange}
      style={styles.input}
      keyboardType='email-address'
      autoComplete='email'
      autoCapitalize='none'
      textColor=''
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
});

export default EmailInput