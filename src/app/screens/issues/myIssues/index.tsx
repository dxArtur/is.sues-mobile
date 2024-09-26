import { IssuesProvider, useIssues } from '@/src/app/contexts/IssuesContext';
import { useAuth } from '@/src/app/hooks/useAuth';
import SectionIssue from '@/src/components/common/SectionIssue';
import Title from '@/src/components/common/Title';
import { colors } from '@/src/styles/colors';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const MyIssuesScreen = () => {
  const { user } = useAuth();
  const { myIssues, loadMyIssues, issues, loadIssues } = useIssues();

  useEffect(() => {
    loadMyIssues(); // Carrega as minhas issues sempre que o usuário mudar
  }, [user]);

  useEffect(() => {
    // Se as issues mudarem, recarregue as minhas issues
    loadMyIssues();
  }, [issues]);

  const myOpenIssues = myIssues.filter(issue => issue.isAssigned === false);
  const issuesMadeForMe = issues.filter(issue => issue.authorId === user?.id);
  const MyIssuesAssigned = issues.filter(issue => 
    issue.assignedUserId === user?.id && issue.isAssigned === true
  );

  const [isOpen, setIsOpen] = useState({
    openIssues: true,
    issuesMadeForMe: false,
    myIssuesAssigned: false,
  });

  const toggleSection = (section) => {
    setIsOpen(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title color="" text={'Minhas Issues'} />
      <SectionIssue
        title="Issues"
        subtitle="para concluir"
        issues={myOpenIssues}
        isOpen={isOpen.openIssues}
        toggleSection={() => toggleSection('openIssues')}
      />
      <SectionIssue
        title="Issues"
        subtitle="criadas por mim"
        issues={issuesMadeForMe}
        isOpen={isOpen.issuesMadeForMe}
        toggleSection={() => toggleSection('issuesMadeForMe')}
      />
      <SectionIssue
        title="Issues"
        subtitle="assinadas"
        issues={MyIssuesAssigned}
        isOpen={isOpen.myIssuesAssigned}
        toggleSection={() => toggleSection('myIssuesAssigned')}
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

export default MyIssuesScreen;