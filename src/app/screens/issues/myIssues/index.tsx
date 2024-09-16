import { useAuth } from '@/src/app/hooks/useAuth';
import IssuesList from '@/src/components/common/IssuesList';
import { Issue } from '@/src/dtos/IssueDTO';
import React, { useState } from 'react';
import { View, Button, Text, SafeAreaView, StyleSheet } from 'react-native';

const MyIssuesScreen = () => {
  const { user } = useAuth();
  const [myIssues, setMyIssues] = useState<Issue[]| undefined>(user?.issues)
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Minhas issues</Text>
        <IssuesList issues={myIssues || []} />
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  container: {
      padding: 24,
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      gap: 6,
    },
})

export default MyIssuesScreen