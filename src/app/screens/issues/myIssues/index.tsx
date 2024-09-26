import { useIssues } from '@/src/app/contexts/IssuesContext';
import { useAuth } from '@/src/app/hooks/useAuth';
import SectionIssue from '@/src/components/common/SectionIssue';
import Title from '@/src/components/common/Title';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';

const MyIssuesScreen = () => {
  const { user } = useAuth();
  const { myIssues, loadMyIssues, issues, loadIssues } = useIssues();

  useEffect(() => {
    if (user) {
      loadMyIssues();
    }
  }, [user]);

  useEffect(() => {
    if (issues.length > 0) {
      loadMyIssues();
    }
  }, [issues]);

  const myOpenIssues = myIssues.filter(issue => issue.isAssigned === false);
  const issuesMadeForMe = issues.filter(issue => issue.authorId === user?.id);
  const myIssuesAssigned = issues.filter(issue => 
    issue.assignedUserId === user?.id && issue.isAssigned === true
  );

  const [isOpen, setIsOpen] = useState({
    openIssues: true,
    issuesMadeForMe: false,
    myIssuesAssigned: false,
  });

  const toggleSection = (section: string) => {
    setIsOpen(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <Title color={styles.titleColor.color} text={'Minhas Issues'} />
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
        issues={myIssuesAssigned}
        isOpen={isOpen.myIssuesAssigned}
        toggleSection={() => toggleSection('myIssuesAssigned')}
      />
      </View>
    </SafeAreaView>
  );
};

export default MyIssuesScreen;
