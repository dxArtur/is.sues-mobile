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

export default function Home() {
  const { signOut, user } = useAuth();
  const { issues, loadIssues } = useIssues();
  const [departmentName, setDepartmentName] = useState<string>('Carregando...');
  const navigation = useNavigation(); // Hook de navegação

  const fetchDepartmentName = async () => {
    try {
      const name = await getDepartmentName(user?.departmentId!);
      setDepartmentName(name);
    } catch (error) {
      setDepartmentName('Erro ao carregar');
      console.error('Erro ao carregar o nome do departamento:', error);
    }
  };

  useEffect(() => {
    fetchDepartmentName();
    loadIssues();
  }, [user?.departmentId, loadIssues]);

  // Função para navegar para a tela de criação de empresa
  const handleCreateCompany = () => {
    navigation.navigate('CriarEmpresa'); // Navega para a tela de criação de empresa
  };
  const handleSearchCompany = () => {
    navigation.navigate('BuscarEmpresas');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header userName={user?.name!} userPhoto={''} />
      <View style={[styles.section, { flexDirection: 'row', padding: 10 }]}>
        <MaterialIcons style={styles.departmentIcon} name="maps-home-work" size={40} color="white" />
        <View>
          <Text style={styles.titleSectionName}>Departamento</Text>
          <Text style={styles.titleSectionStatus}>{departmentName}</Text>
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
        <IssuesList issues={issues} />
      </View>

      {/* Botão para testar a navegação para a criação de empresas */}
      <Button title="Criar Empresa" onPress={handleCreateCompany} />
      <Button title="Buscar Empresa" onPress={handleSearchCompany} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    gap: 6,
  },
  section: {
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#f8f8f8',
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
