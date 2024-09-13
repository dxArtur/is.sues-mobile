import HeaderProfile from '@/src/components/common/HeaderProfile';
import React, { useEffect, useState } from 'react';
import { View, Button, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useAuth } from '@/src/app/hooks/useAuth';
import { getCompanyByDep } from '@/src/api/apiCompany';
import { CompanyDto } from '@/src/dtos/CompanyDTO';
import { getDepartmentName } from '@/src/api/department';


const ProfileScreen: React.FC = () => {
  const { user } = useAuth();
  const [company, setCompany] = useState<CompanyDto>()
  const [departmentName, setDepartmentName] = useState<string>('Carregando...');

  const fetchCompany = async () => {
    try {
      const company = await getCompanyByDep(user?.departmentId!);
      setCompany(company);
    } catch (error) {
      console.error('Erro ao carregar o nome do departamento:', error);
    }
  };

  const fetchDepartmentName = async () => {
    try {
      const name = await getDepartmentName(user?.departmentId!);
      setDepartmentName(name);
    } catch (error) {
      setDepartmentName('Erro ao carregar');
      console.error('Erro ao carregar o nome do departamento:', error);
    }
  }

  useEffect(() => {
    fetchCompany()
    fetchDepartmentName()
  }, [user?.departmentId, user?.departmentId]);
  
  return (
    <SafeAreaView style={styles.container}>
      <HeaderProfile
      userName={user?.name!}
      userPhoto={user?.photo!}
      occupation={user?.occupation!}
      onPress={()=>{}}
      />

      <View style={[styles.section, { padding: 10 }]}>
        <Text style={styles.titleSectionName}>Colaborador na, </Text>
        <Text style={styles.titleSectionCompany}>{company?.name}</Text>
      </View>

      <View style={[styles.section, { padding: 10 }]}>
        <Text style={styles.titleSectionName}>{user?.adm! ? ('líder no'):('membro do')}</Text>
        <Text style={styles.titleSectionCompany}>{departmentName}</Text>
      </View>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    gap: 6,
    marginTop:24
  },

  section: {
    flexDirection: 'column',
    gap: 4,
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
  titleSectionCompany: {
    fontWeight: 'bold',
    fontSize:16
  },

})

export default ProfileScreen