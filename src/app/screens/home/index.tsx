import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { useIssues } from '../../contexts/IssuesContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/src/components/common/HeaderHomePage';
import IssuesList from '@/src/components/common/IssuesList';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { useCompany } from '../../hooks/useCompany';
import { useDepartment } from '../../hooks/useDepartment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import LoadingIndicator from '@/src/components/company/LoadingIndicator';

export default function Home() {
  const { signOut, user } = useAuth();
  const { getDepartmentById } = useDepartment();
  const { issues, loadIssues } = useIssues();
  const { companies, loadCompanies } = useCompany();
  
  const [departmentName, setDepartmentName] = useState<string>('Carregando...');
  const [companyName, setCompanyName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); 
  const [isHead, setIsHead] = useState(false);
  const navigation = useNavigation();
  
  const openIssues = issues.filter(issue => issue.status === false)

  const issuesForMyDept = openIssues.filter(issue => issue.departmentId === user?.departmentId);

  const fetchCompanyData = async () => {
    try {
      const storedCompanyId = await AsyncStorage.getItem('@companyId');
      let companyId = storedCompanyId;

      if (!companyId && user?.departmentId) {
        const department = await getDepartmentById(user.departmentId);
        if (department) {
          companyId = department.companyId;
        }
      }

      if (companyId) {
        if (companies.length === 0) {
          await loadCompanies();
        }

        const foundCompany = companies.find(c => c.id === companyId);
        if (foundCompany) {
          setCompanyName(foundCompany.name);
          setIsHead(foundCompany.headid === user?.id);
        }
      } else {
        setCompanyName(null);
      }
    } catch (error) {
      console.error('Erro ao buscar os dados da empresa:', error);
      setCompanyName('Erro ao carregar empresa');
    } finally {
      setLoading(false);
    }
  };

  const fetchDepartmentName = async () => {
    try {
      if (user?.departmentId) {
        const department = await getDepartmentById(user.departmentId);
        if (department) {
          setDepartmentName(department.name);
        }
      } else {
        setDepartmentName('Não encontrado');
      }
    } catch (error) {
      setDepartmentName('Erro ao carregar');
    }
  };

  useEffect(() => {
    fetchDepartmentName();
    fetchCompanyData();
    if (issues.length === 0) {
      loadIssues();
    }
  }, [companies]);

  if (loading) {
    return <LoadingIndicator message="Carregando dados..." />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header userName={user?.name!} userPhoto={user?.photo!} />
      
      <View style={styles.card}>
        <MaterialIcons style={styles.departmentIcon} name="maps-home-work" size={40} color="white" />
        <View>
          <Text style={styles.titleSectionName}>{isHead ? 'Líder da ' : 'Membro do '}</Text>
          <Text style={styles.titleSectionStatus}>{isHead ? companyName : departmentName}</Text>
        </View>
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
