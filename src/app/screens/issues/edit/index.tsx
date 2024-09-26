import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import IssueAction from '@/src/components/common/ButtonIssueAction';
import IssuesInput from '@/src/components/common/IssueInput';
import Title from '@/src/components/common/Title';
import GoBackArrow from '@/src/components/common/GoBackArrow';
import { Issue } from '@/src/dtos/IssueDTO';
import { colors } from '@/src/styles/colors';
import { useIssues } from '@/src/app/contexts/IssuesContext'; // Importa o contexto

interface EditIssueRouteParams {
  issue: Issue; // A estrutura do objeto issue que você espera
}

const EditIssueScreen: React.FC = () => {
  const route = useRoute();
  const { issue } = route.params as EditIssueRouteParams;

  const { updateExistingIssue } = useIssues(); // Usar o contexto
  const [title, setTitle] = useState(issue.title); // Inicializar com valores existentes
  const [description, setDescription] = useState(issue.description);

  const navigation = useNavigation();

  const handleSubmitIssue = async () => {
    try {
      const updatedIssue: Issue = {
        ...issue,
        title,
        description,
      };
      
      await updateExistingIssue(updatedIssue); // Atualiza a issue no contexto e na API
      navigation.navigate('Home'); // Navega de volta para a home
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoBackArrow />
      <Title text={'Edite sua issue'} />
      <IssuesInput
        value={title}
        onChange={setTitle}
        placeholder='Modifique a título da issue.'
      />
      <IssuesInput
        value={description}
        onChange={setDescription}
        lines={4}
        placeholder='Modifique a descrição da atividade que deverá ser feita.'
      />
      <IssueAction
        title={'editar issue'}
        onPress={handleSubmitIssue}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: colors.backgroundPrincipal,
    gap: 10,
  },
});

export default EditIssueScreen;
