import { View, Text, Button, FlatList, Pressable, ListRenderItem } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { useIssues } from '../../contexts/IssuesContext';
import React from 'react';
import { Issue } from '../../../dtos/IssueDTO';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem vindo, {user?.name}</Text>
      <Button title="Sair" onPress={signOut} />
      <View>
        <FlatList 
          data={issues}
          keyExtractor={(issue) => issue.id}
          renderItem={renderIssues}
          >
         </FlatList>
      </View>
    </View>
  );
}
