import React, { useState, useEffect } from "react";
import { View, Text, Alert, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDepartment } from "@/src/app/hooks/useDepartment";
import { useAuth } from "@/src/app/hooks/useAuth";
import Modal2 from "@/src/components/company/Modal2";
import Button1 from "@/src/components/company/Button1";
import styles from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UsersDto } from "@/src/dtos/UserDTO";

const DeletarFuncionario = () => {
  const navigation = useNavigation();
  const { deleteEmployee } = useAuth();
  const { departments, loadDepartments } = useDepartment(); 
  const [companyId, setCompanyId] = useState<string | null>(null);
  const [employees, setEmployees] = useState<UsersDto[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      await loadDepartments();

      const storedCompanyId = await AsyncStorage.getItem('@companyId');
      if (storedCompanyId) {
        setCompanyId(storedCompanyId);

        const companyDepartments = departments.filter(department => department.companyId === storedCompanyId);
        const employeesList: UsersDto[] = [];

        companyDepartments.forEach(department => {
          if (department.users && department.users.length > 0) {
            employeesList.push(...department.users);
          }
        });

        setEmployees(employeesList);
      } else {
        Alert.alert('Erro', 'ID da empresa não encontrado.');
      }
    };

    fetchEmployees();
  }, [departments]);

  const handleDeleteEmployee = async (employeeId: string) => {
    try {
      await deleteEmployee(employeeId);
      Alert.alert('Sucesso', 'Funcionário deletado com sucesso!');
      setEmployees(employees.filter(employee => employee.id !== employeeId));
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao deletar o funcionário.');
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Modal2
          jobDetails="Deletar Funcionários"
          component1={require("@/src/assets/images/component-11.png")}
          component1IconLeft={93}
        />

        <Text style={styles.title}>Selecione um Funcionário para Deletar</Text>

        <FlatList
          data={employees}
          keyExtractor={(item) => item.id!}
          renderItem={({ item }) => (
            <View style={styles.employeeItem}>
              <Text style={styles.employeeText}>{item.name}</Text>
              <Button1
                text="Deletar"
                buttonBackgroundColor="#D91143"
                onPress={() => {
                  if (item.id) {
                    handleDeleteEmployee(item.id);
                  } else {
                    Alert.alert('Erro', 'ID do funcionário não encontrado.');
                  }
                }}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeletarFuncionario;
