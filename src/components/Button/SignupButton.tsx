import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, } from 'react-native';

interface SignupButtonProps {
  onPress: () => void;
}

const SignupButton: React.FC<SignupButtonProps> = ({ onPress }) => {
  return (
    <Button mode="contained" onPress={onPress} style={styles.input} buttonColor='#98ff98' textColor='#006400'>
        Registrar
    </Button>
  );
};


const styles = StyleSheet.create({
    input: {
      borderRadius: 5,
    },
  });

export default SignupButton