import React, { useState, useEffect } from "react";
import { View, Text, Alert, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDepartment } from "@/src/app/hooks/useDepartment"; // Hook de departamento
import Modal2 from "@/src/components/company/Modal2";
import Button1 from "@/src/components/company/Button1";
import TextInput1 from "@/src/components/company/TextInput1";
import styles from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditarDepartamentos = () => {
  const navigation = useNavigation();
  const { departments, loadDepartments, updateDepartment } = useDepartment();
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<string | null>(null);
  const [departmentName, setDepartmentName] = useState('');
  const [companyId, setCompanyId] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      await loadDepartments(); // Carrega os departamentos

      const storedCompanyId = await AsyncStorage.getItem('@companyId'); // Obtém o ID da empresa
      if (storedCompanyId) {
        setCompanyId(storedCompanyId);
      } else {
        Alert.alert('Erro', 'ID da empresa não encontrado.');
      }
    };

    fetchDepartments();
  }, []);

  const handleEditDepartment = async () => {
    if (!departmentName || !selectedDepartmentId) {
      Alert.alert('Erro', 'O nome do departamento é obrigatório.');
      return;
    }

    try {
      await updateDepartment(selectedDepartmentId, { name: departmentName });
      Alert.alert('Sucesso', 'Departamento atualizado com sucesso!');
      navigation.goBack(); // Volta para a tela anterior
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao atualizar o departamento.');
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal2
        jobDetails="Editar Departamentos"
        component1={require("@/src/assets/images/component-11.png")}
        showSearchBar={false}
        component1IconLeft={93}
        cardano2={require("@/src/assets/images/cardano-22.png")}
        showFrameView={false}
      />
      
      <Text style={styles.title}>Selecione um Departamento para Editar</Text>

      <FlatList
        data={departments.filter(department => department.companyId === companyId)} // Filtra apenas os departamentos da empresa
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <View style={styles.departmentItem}>
            <Text style={styles.departmentText}>{item.name}</Text>
            <Button1
              text="Editar"
              onPress={() => {
                if (item.id && item.name) {
                  setSelectedDepartmentId(item.id);
                  setDepartmentName(item.name);
                }
              }}
            />
          </View>
        )}
      />

      {selectedDepartmentId && (
        <View style={styles.editSection}>
          <Text style={styles.label}>Novo Nome do Departamento</Text>
          <TextInput1
            value={departmentName}
            onChangeText={setDepartmentName}
            text="Nome do Departamento"
            textInputWidth="unset"
            textInputAlignSelf="stretch"
            textInputBackgroundColor="#f5f5f5"
            textInputBorderColor="#765ac6"
            textInputPaddingVertical="unset"
          />
          <Button1
            text="Salvar Alterações"
            onPress={handleEditDepartment}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default EditarDepartamentos;
