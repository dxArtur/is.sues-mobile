import { IssuesProvider, useIssues } from '@/src/app/contexts/IssuesContext';
import { useAuth } from '@/src/app/hooks/useAuth';
import IssuesList from '@/src/components/common/IssuesList';
import SectionIssue from '@/src/components/common/SectionIssue';
import SectionIssues from '@/src/components/common/SectionIssue';
import Title from '@/src/components/common/Title';
import { Issue } from '@/src/dtos/IssueDTO';
import { colors } from '@/src/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Button, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';

const MyIssuesScreen = () => {
  const { user } = useAuth();
  const { myIssues, loadMyIssues } = useIssues ();

  const issues = myIssues.filter(issue => issue.isAssigned === false)

  const issuesMadeForMe = myIssues.filter(issue => issue.authorId === user?.id)

  const myIssuesAssigned = myIssues.filter(issue=> issue.isAssigned === true)
  
//  const [myIssues, setMyIssues] = useState<Issue[]| undefined>(user?.issues)
const [isOpen, setIsOpen] = useState({
  openIssues: true,
  issuesMadeForMe: false,
  myIssuesAssigned: false,
})

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
        subtitle="em aberto"
        issues={issues}
        isOpen={isOpen.openIssues}
        toggleSection={() => toggleSection('openIssues')}
      />
      <SectionIssue
        title="Issues"
        subtitle="feitas por mim"
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
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  container: {
      padding: 24,
      justifyContent: 'center',
      backgroundColor: colors.backgroundPrincipal,
      gap: 10,
    },
    section: {
      flexDirection: 'row',
      alignItems:'center',
      backgroundColor: colors.backgroundSecundary,
    },
})

export default MyIssuesScreen