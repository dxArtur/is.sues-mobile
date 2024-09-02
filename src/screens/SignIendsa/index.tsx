import EmailInput from '@/src/components/input/EmailInput';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const SigninScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <EmailInput value={email} onChange={setEmail} />
        {/* <PasswordInput value={password} onChange={setPassword} />
        <LoginButton onPress={handleLogin} /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    width: '80%',
    alignSelf: 'center',
  },
});

export default SigninScreen;