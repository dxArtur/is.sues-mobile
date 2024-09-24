import { createIssues } from '@/src/api/issues';
import { useAuth } from '@/src/app/hooks/useAuth';
import AuthButton from '@/src/components/Button/AuthButton';
import IssueAction from '@/src/components/common/ButtonIssueAction';
import IssuesInput from '@/src/components/common/IssueInput';
import Title from '@/src/components/common/Title';
import TextInput1 from '@/src/components/company/TextInput1';
import ConfirmPasswordInput from '@/src/components/input/ConfirmPasswordInput';
import EmailInput from '@/src/components/input/EmailInput';
import NameInput from '@/src/components/input/NameInput';
import OccupationInput from '@/src/components/input/OccupationInput';
import PasswordInput from '@/src/components/input/PasswordInput';
import { Issue } from '@/src/dtos/IssueDTO';
import { colors } from '@/src/styles/colors';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Button, Text, SafeAreaView, StyleSheet,  } from 'react-native';
import { TextInput } from 'react-native-paper';
import Home from '../../home';

const CreateIssueScreen = () => {
  const {user} =useAuth()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  
  const navigation = useNavigation();

  const handleSubmitIssue =async () => {
    try {
      const issue:Issue = {title, description, departmentId:user?.departmentId, authorId: user?.id!}
      const response = await createIssues(issue)
      navigation.navigate(Home)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title
      text={'Crie uma nova issue'}
      />
      <IssuesInput
        value={title}
        onChange={setTitle}
        placeholder='Digite a título da issue.'
      />
      <IssuesInput
        value={description}
        onChange={setDescription}
        lines={4}
        placeholder='Descreva a atividade que deverá ser feita.'
      />
      <IssueAction
        title={'Criar issue'}
        onPress={handleSubmitIssue}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input:{
    backgroundColor:colors.backgroundPrincipal
    
  },
  container: {
    flex:1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: colors.backgroundPrincipal,
    gap: 10,
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