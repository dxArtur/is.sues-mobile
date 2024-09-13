import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { Issue } from '@/src/dtos/IssueDTO';
import IssueItem from './Issue';
import { DepartmentDto } from '@/src/dtos/DepartmentDTO';
import DepartmentItem from './DepartmentItem';


interface DepartmentListProps {
    departments: DepartmentDto[];
  }

const DepartmentList: React.FC<DepartmentListProps> = ({ departments }) => {
    const renderDepartments = ({ item }: { item: DepartmentDto }) => <DepartmentItem item={item} />

    return (
        <FlatList
            data={departments}
            keyExtractor={(department) => department.id}
            renderItem={renderDepartments}
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

export default DepartmentList