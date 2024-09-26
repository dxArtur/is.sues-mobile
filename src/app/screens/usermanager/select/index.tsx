import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@/src/app/hooks/useAuth'; 
import { useDepartment } from '@/src/app/hooks/useDepartment'; 
import Modal2 from '@/src/components/company/Modal2';
import Button1 from '@/src/components/company/Button1';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'; 
import { UsersDto } from '@/src/dtos/UserDTO'; 

const SelecionarFuncionarioParaEditar = () => {
  const { user } = useAuth(); 
  const { departments, loadDepartments } = useDepartment(); 
  const [employees, setEmployees] = useState<UsersDto[]>([]); 
  const [loading, setLoading] = useState(true); 
  const [companyId, setCompanyId] = useState<string | null>(null);
  const navigation = useNavigation(); 

  useEffect(() => {
    const fetchCompanyId = async () => {
      try {
        const storedCompanyId = await AsyncStorage.getItem('@companyId');
        if (storedCompanyId) {
          setCompanyId(storedCompanyId);
        } else {
          Alert.alert('Erro', 'ID da empresa não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao carregar o ID da empresa:', error);
      }
    };
    fetchCompanyId();
  }, []);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        if (!companyId) return;

        await loadDepartments();

        const companyDepartments = departments.filter(
          (department) => department.companyId === companyId && department.users && department.users.length > 0
        );
        const employeesList: UsersDto[] = [];

        for (const department of companyDepartments) {
          if (department.users) {
            for (const user of department.users) {
              employeesList.push(user);
            }
          }
        }
        setEmployees(employeesList);
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Ocorreu um erro ao carregar os funcionários.');
      } finally {
        setLoading(false);
      }
    };

    if (companyId) {
      fetchEmployees();
    }
  }, [companyId, departments]);

  const handleEditEmployee = (employeeId: string) => {
    navigation.navigate('EditarFuncionario', { id: employeeId });
  };

  if (loading) {
    return <Text>Carregando funcionários...</Text>;
  }

  if (employees.length === 0) {
    return <Text>Nenhum funcionário encontrado.</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <Modal2
        jobDetails="Selecionar Funcionário"
        component1={require("@/src/assets/images/component-11.png")}
        component1IconLeft={93}
      />
      <Text style={styles.title}>Selecione um Funcionário para Editar</Text>

      <FlatList
        data={employees}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <View style={styles.employeeItem}>
            <Text style={styles.employeeText}>{item.name}</Text>
            {item.id ? (
              <Button1
                text="Editar"
                onPress={() => handleEditEmployee(item.id!)}
              />
            ) : (
              <Text>ID do funcionário não encontrado.</Text>
            )}
          </View>
        )}
      />
      </View>
    </SafeAreaView>
  );
};

export default SelecionarFuncionarioParaEditar;
