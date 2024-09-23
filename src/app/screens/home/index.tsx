import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { useIssues } from '../../contexts/IssuesContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/src/components/common/HeaderHomePage';
import IssuesList from '@/src/components/common/IssuesList';
import { MaterialIcons } from '@expo/vector-icons';
import { getDepartmentName } from '@/src/api/department';
import { useNavigation } from '@react-navigation/native'; // Adiciona o hook de navegação
import { colors } from '@/src/styles/colors';
import { useCompany } from '../../hooks/useCompany';
import { useDepartment } from '../../hooks/useDepartment';
import { DepartmentDto } from '@/src/dtos/DepartmentDTO';

export default function Home() {
  const { signOut, user } = useAuth();
  const { getDepartmentById }= useDepartment()
  const { issues, loadIssues } = useIssues();
  const [departmentName, setDepartmentName] = useState<string>('Carregando...');
  const [department, setDepartment] = useState<DepartmentDto>();
  const navigation = useNavigation(); // Hook de navegação

  const issuesForMyDept = issues.filter(issue => issue.departmentId === user?.departmentId)

  const fetchDepartmentName = async () => {
    try {
      const dept = await getDepartmentById(user?.departmentId!)
      if (dept) {
        setDepartment(dept)
        setDepartmentName(dept.name)
      }
    } catch (error) {
      setDepartmentName('Erro ao carregar')
    }
  }

  

  useEffect(() => {
    fetchDepartmentName()
    loadIssues();
  }, [loadIssues]);

  return (
    <SafeAreaView style={styles.container}>
      <Header userName={user?.name!} userPhoto={''} />
      <View style={[styles.section, { flexDirection: 'row', padding: 10 }]}>
        <MaterialIcons style={styles.departmentIcon} name="maps-home-work" size={40} color="white" />
        <View>
          <Text style={styles.titleSectionName}>{user?.adm ? 'Líder do ' : 'Membro do '}</Text>
          <Text style={styles.titleSectionStatus}>{departmentName}</Text>
        </View>
      </View>
      <View style={[styles.section, { padding: 10 }]}>
      <Text style={styles.titleSectionName}>Colaborador na {}</Text>
      </View>
      <View style={[styles.section, { padding: 10 }]}>
        <View style={styles.headerSection}>
          <View style={styles.titleSection}>
            <Text style={styles.titleSectionName}>Issues</Text>
            <Text style={styles.titleSectionStatus}> abertas</Text>
          </View>
          <View style={styles.iconInfoSection}>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="gray" />
          </View>
        </View>
        <IssuesList issues={issuesForMyDept} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    backgroundColor: colors.backgroundPrincipal,
    gap: 6,
  },
  section: {
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#fff', //'#f8f8f8',
    padding: 4,
    paddingLeft: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerSection: {
    flexDirection: 'row',
    gap: 10,
  },
  titleSection: {
    paddingLeft: 6,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleSectionName: {
    color: '#808080',
    fontWeight: 'light',
  },
  titleSectionStatus: {
    fontWeight: 'bold',
  },
  departmentIcon: {
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    padding: 4,
  },
  iconInfoSection: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
  },
});
