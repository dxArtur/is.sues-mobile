import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface NameInputProps {
  value: string;
  onChange: (text: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ value, onChange }) => {
  return (
    <TextInput
      label="Nome"
      value={value}
      onChangeText={onChange}
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

export default NameInput