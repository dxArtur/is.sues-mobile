import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, } from 'react-native';

interface SigninButtonProps {
  onPress: () => void;
}

const SigninButton: React.FC<SigninButtonProps> = ({ onPress }) => {
  return (
    <Button mode="contained" onPress={onPress} style={styles.input} buttonColor='#98ff98' textColor='#006400'>
        Signin
    </Button>
  );
};


const styles = StyleSheet.create({
    input: {
      borderRadius: 5,
    },
  });

export default SigninButton