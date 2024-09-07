import { View, Text, Button, FlatList, Pressable, ListRenderItem, StyleSheet } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { useIssues } from '../../contexts/IssuesContext';
import React from 'react';
import { Issue } from '../../../dtos/IssueDTO';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/src/components/common/HeaderHomePage';
import IssuesList from '@/src/components/common/IssuesList';
import { MaterialIcons } from '@expo/vector-icons'

export default function Home() {
  const { signOut, user } = useAuth();
  const {issues, loadIssues} = useIssues()

  React.useEffect(()=>{
    loadIssues()
  }, [loadIssues])

  const renderIssues = ({item}: {item: Issue}) => {
    return <View>
      <Pressable
        onPress={() => { } }
      >
        <Text>
          {item.description}
        </Text>
      </Pressable>
    </View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header userName={user?.name!} userPhoto={''}/>
      <View style={styles.section}>
        <View style={styles.titleSection}>
          <Text style={styles.titleSectionName}>Issues</Text>
          <Text style={styles.titleSectionStatus}> abertas</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-down" size={20} color="gray" />
        <IssuesList issues={issues} renderIssues={renderIssues} />
      </View>
      
      <Button title="Sair" onPress={signOut} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
    gap:6,
  },
  title: {
    fontSize: 16,
    fontWeight:'bold',
  },
  section: {
    flexDirection:'row',
    gap:10,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding:4,
    paddingLeft:10,
    borderRadius:5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  titleSection: {
    
    flexDirection:'row'
  },
  titleSectionName:{
    color:'#808080',
    fontWeight:'light'
  },
  titleSectionStatus: {
    fontWeight:'bold'
  }
})