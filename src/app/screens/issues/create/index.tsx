import { useAuth } from '@/src/app/hooks/useAuth';
import AuthButton from '@/src/components/Button/AuthButton';
import ConfirmPasswordInput from '@/src/components/input/ConfirmPasswordInput';
import EmailInput from '@/src/components/input/EmailInput';
import NameInput from '@/src/components/input/NameInput';
import OccupationInput from '@/src/components/input/OccupationInput';
import PasswordInput from '@/src/components/input/PasswordInput';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Button, Text, SafeAreaView, StyleSheet, } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CreateIssueScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUp } = useAuth()

  const handleCheckboxPress = () => {
      setIsAdmin(!isAdmin)
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>oi</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'left',
    color: '#6b7280',
    marginBottom: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  }
});

export default CreateIssueScreen