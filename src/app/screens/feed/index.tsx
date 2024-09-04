// import { View, Text, Button, FlatList, Pressable, ListRenderItem } from 'react-native';
// import React from 'react';
// import { useIssues } from '@/src/contexts/IssuesContext';
// import { useAuth } from '@/src/contexts/AuthContext';
// import { Issue } from '@/src/dtos/IssueDTO';

// export default function Home() {
//   const { signOut, user } = useAuth();
//   const {issues, loadIssues} = useIssues()

//   React.useEffect(()=>{
//     loadIssues()
//   }, [loadIssues])

//   const renderIssues = ({item}: {item: Issue}) => {
//     return <View>
//       <Pressable
//         onPress={() => { } }
//       >
//         <Text>
//           {item.description}
//         </Text>
//       </Pressable>
//     </View>;
//   }

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Bem vindo, {user?.name}</Text>
//       <Button title="Sair" onPress={signOut} />
//       <View>
//         <FlatList 
//           data={issues}
//           keyExtractor={(issue) => issue.id}
//           renderItem={renderIssues}
//           >
//          </FlatList>
//       </View>
//     </View>
//   );
// }


import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useAuth } from '@/src/app/contexts/AuthContext';
// import { useIssues } from '@/src/app/contexts/IssuesContext'
import { Issue } from '@/src/dtos/IssueDTO';

const HomeScreen: React.FC = () => {
    const { user } = useAuth()
    // const { issues, loadIssues } = useIssues();

    // useEffect(() => {
    //     loadIssues(); // Carregue as issues quando o componente for montado
    //   }, []);

    function handleAddIssue(): void {
        
    }

return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, {user?.name}</Text>
        <Text style={styles.subtitle}>Aqui estão as issues do seu departamento:</Text>
      </View>
      {/* <FlatList
        data={null}
        renderItem={null}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.issueList}
      /> */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddIssue}>
        <Text style={styles.addButtonText}>Adicionar Issue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
    marginTop: 32
  },
  header: {
    marginTop:10,
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  issueList: {
    flexGrow: 1,
  },
  issueCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  issueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  issueDescription: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen
