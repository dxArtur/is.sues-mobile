import React from 'react';
import { Checkbox as PaperCheckbox} from 'react-native-paper';
import { StyleSheet, } from 'react-native';

interface CheckboxProps {
  onPress: () => void;
  color: string;
  uncheckedColor: string;
  status: 'checked' | 'unchecked' | 'indeterminate';
}

const Checkbox: React.FC<CheckboxProps> = ({ onPress, status, color, uncheckedColor }) => {
  return (
    <PaperCheckbox
    status={status}
    onPress={onPress}
    color={color}
    uncheckedColor={uncheckedColor}
    />
  );
};


const styles = StyleSheet.create({
    input: {
      borderRadius: 5,
    },
  });

export default Checkbox