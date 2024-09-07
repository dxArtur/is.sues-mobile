import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { getAuthorIssue } from '@/src/api/issues';
import { Issue } from '@/src/dtos/IssueDTO';

interface IssueItemProps {
  item: Issue;
}

const IssueItem: React.FC<IssueItemProps> = ({ item }) => {
  const [authorName, setAuthorName] = useState<string>('Carregando...');

  useEffect(() => {
    async function fetchUserName() {
      const name = await getAuthorIssue(item.authorId);
      setAuthorName(name);
    }
    fetchUserName();
  }, [item.authorId]);

  return (
    <Pressable onPress={() => { }}>
      <View style={styles.issue}>
        <Text style={styles.issueInfo}>
          aberta em {item.createdAt}
        </Text>
        <View style={styles.titleIssueContainer}>
          <Octicons name="issue-opened" size={20} color="gray" />
          <View style={styles.titleContainer}>
            <Text style={styles.issueTitle}>
              {item.title}
            </Text>
          </View>
        </View>
        <View style={styles.footerIssue}>
            <Text style={item.status ? styles.statusInProgress : styles.statusOpen}>
            {item.status?'Em progresso':'Aberta'}
            </Text>
            <Text style={styles.issueAuthor}>
            por {authorName}
            </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  issue: {
    backgroundColor: '#f2f2f2',
    padding: 4,
    paddingLeft: 10,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  issueTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  issueInfo: {
    fontSize: 12,
    color: 'gray',
  },
  titleIssueContainer: {
    margin: 4,
    gap: 8,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 6,
  },
  titleContainer: {
    paddingBottom: 2,
    marginLeft: 2,
    marginRight: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flex: 1,
  },
  footerIssue: {
    marginRight:10,
    marginLeft:6,
    marginVertical:4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  issueAuthor: {
    fontStyle:'italic',
    fontSize: 12,
    fontWeight:'thin',
    color: 'gray',
},
  statusInProgress: {},
  statusOpen:{
    padding:4,
    fontSize:16,
    color:'#004d40',
    backgroundColor:'#a5d6a7',
    fontWeight:'bold',
    borderRadius:10
  }
});

export default IssueItem;
