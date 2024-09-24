import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { Issue } from '@/src/dtos/IssueDTO';
import IssueItem from './Issue';
import { colors } from '@/src/styles/colors';


interface IssuesListProps {
    issues: Issue[];
  }

const IssuesList: React.FC<IssuesListProps> = ({ issues }) => {
    const renderIssues = ({ item }: { item: Issue }) => <IssueItem item={item} />

    return (
        <FlatList
            scrollEnabled={true}
            style ={style.container}
            data={issues}
            keyExtractor={(issue) => issue.id}
            renderItem={renderIssues}
        />
    )
}

const style = StyleSheet.create({
    container: {
        width:'100%',
        marginVertical: 6
    }
})

export default IssuesList