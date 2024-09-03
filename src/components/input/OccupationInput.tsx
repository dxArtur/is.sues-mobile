import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface OccupationInputProps {
  value: string;
  onChange: (text: string) => void;
}

const OccupationInput: React.FC<OccupationInputProps> = ({ value, onChange }) => {
  return (
    <TextInput
      label="Qual a sua função"
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

export default OccupationInput