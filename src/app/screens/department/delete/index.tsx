import React, { useState, useEffect } from "react";
import { View, Text, Alert, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDepartment } from "@/src/app/hooks/useDepartment";
import Modal2 from "@/src/components/company/Modal2";
import Button1 from "@/src/components/company/Button1";
import styles from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeletarDepartamentos = () => {
  const navigation = useNavigation();
  const { departments, loadDepartments, deleteDepartment } = useDepartment();
  const [companyId, setCompanyId] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      await loadDepartments();

      const storedCompanyId = await AsyncStorage.getItem('@companyId');
      if (storedCompanyId) {
        setCompanyId(storedCompanyId);
      } else {
        Alert.alert('Erro', 'ID da empresa não encontrado.');
      }
    };

    fetchDepartments();
  }, []);

  const handleDeleteDepartment = async (departmentId: string) => {
    try {
      await deleteDepartment(departmentId);
      Alert.alert('Sucesso', 'Departamento deletado com sucesso!');
      loadDepartments();
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao deletar o departamento.');
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <Modal2
        jobDetails="Deletar Departamentos"
        component1={require("@/src/assets/images/component-11.png")}
        component1IconLeft={93}
      />
      
      <Text style={styles.title}>Selecione um Departamento para Deletar</Text>

      <FlatList
        data={departments.filter(department => department.companyId === companyId)} // Filtra apenas os departamentos da empresa
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <View style={styles.departmentItem}>
            <Text style={styles.departmentText}>{item.name}</Text>
            <Button1
              text="Deletar"
              buttonBackgroundColor="#D91143"
              onPress={() => {
                if (item.id) {
                  handleDeleteDepartment(item.id);
                } else {
                  Alert.alert('Erro', 'ID do departamento não encontrado.');
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

export default DeletarDepartamentos;
