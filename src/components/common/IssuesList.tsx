import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { Issue } from '@/src/dtos/IssueDTO';


interface IssuesListProps {
    issues: Issue[];
    renderIssues: ({ item }: { item: Issue }) => JSX.Element;
}

const IssuesList: React.FC<IssuesListProps> = ({ issues, renderIssues }) => {

    return (
        <FlatList
            data={issues}
            keyExtractor={(issue) => issue.id}
            renderItem={renderIssues}
        />
    )
}

const style = StyleSheet .create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize:18,
        fontWeight: 'bold',
    }
})

export default IssuesList