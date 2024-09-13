import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native'; // Hook de navegação
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { getCompanyDepartment } from '@/src/api/department';
import { getCompany } from '@/src/api/apiCompany';
import { CompanyDto } from '@/src/dtos/CompanyDTO';
import HeaderCompany from '@/src/components/common/HeaderCompany';

export default function CompanyIndex() {
  const { user } = useAuth();
  const [company, setCompany] = useState<CompanyDto | null>(null);
  const navigation = useNavigation(); // Hook de navegação

  const fetchCompany = async () => {
    if (user?.departmentId) {
      try {
        const companyId = await getCompanyDepartment(user.departmentId)
        const company = await getCompany(companyId)
        setCompany(company);
      } catch (error) {
        console.error('Erro ao carregar os detalhes da empresa:', error);
      }
    }
  };

  useEffect(() => {
    fetchCompany();
  }, [user?.departmentId]);

  const handleEditCompany = () => {
    navigation.navigate('EditarEmpresa'); // Navega para a tela de edição de empresa
  };

  const handleViewCompany = () => {
    navigation.navigate('VisualizarEmpresa'); // Navega para a tela de visualização de empresa
  };

  return (
    <SafeAreaView style={styles.container}>
        <HeaderCompany
            name={company?.name!}
            description = {company?.description!}
            onPress={handleEditCompany}
        />

      {company ? (
        <View style={styles.section}>
        <View style={styles.infoSection}>
          <Text style={styles.titleSectionName}>{'principal'}</Text>
          <Text style={[styles.titleSectionName, {fontWeight:'bold'}]}>{' responsável'}</Text>
        
        </View>
            <View style={styles.infoSection}>
                <FontAwesome5 style={{marginLeft:15}} name="user-tie" size={24} color="gray" />
                <Text style={[styles.infoText, {fontWeight:'bold'}]}>{company.headId}</Text>
            </View>
        </View>
      ) : (
        <Text style={styles.loadingText}>Carregando informações da empresa...</Text>
      )}
        <View style={[styles.section, { padding: 10 }]}>

            <View style={styles.headerSection}>
                <View style={styles.titleSection}>
                    <Text style={styles.titleSectionName}>todos os</Text>
                    <Text style={[styles.titleSectionName, {fontWeight:'bold'}]}> departamentos</Text>
            
                </View>
                <View style={styles.iconInfoSection}>
                    <MaterialIcons name="keyboard-arrow-down" size={20} color="gray" />
                </View>
            </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    
  container: {
    padding: 24,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    gap: 6
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
  infoSection: { 
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    
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
    fontSize:16
  },
  
  
  
  loadingText: {
    fontSize: 16,
    color: 'gray',
  },
  buttonContainer: {
    marginTop: 20,
  },

 

  iconInfoSection: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
  },
 
  
});