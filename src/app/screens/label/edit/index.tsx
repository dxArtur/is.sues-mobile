import React, { useState, useEffect } from "react";
import { Text, View, Alert, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLabel } from "@/src/app/hooks/useLabel";
import { useDepartment } from "@/src/app/hooks/useDepartment"; // Hook de departamentos
import TextInput1 from "@/src/components/company/TextInput1";
import Button1 from "@/src/components/company/Button1";
import Modal2 from "@/src/components/company/Modal2";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Para pegar o companyId
import styles from "./styles";

const EditarLabel = () => {
  const [selectedLabelId, setSelectedLabelId] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [departmentName, setDepartmentName] = useState(''); // Armazenar o nome do departamento
  const [departmentId, setDepartmentId] = useState(''); // Armazenar o departmentId para atualizar
  const [companyId, setCompanyId] = useState<string | null>(null);

  const { labels, loadLabels, updateLabel, getLabelById } = useLabel();
  const { departments, loadDepartments } = useDepartment(); // Hook para carregar os departamentos
  const navigation = useNavigation();

  // Carrega o companyId e as labels ao iniciar a screen
  useEffect(() => {
    const fetchCompanyAndLabels = async () => {
      try {
        const storedCompanyId = await AsyncStorage.getItem('@companyId');
        if (storedCompanyId) {
          setCompanyId(storedCompanyId);
          await loadLabels(); // Carrega todas as labels
          await loadDepartments(); // Carrega os departamentos
        } else {
          Alert.alert('Erro', 'ID da empresa não encontrado.');
        }
      } catch (error) {
        Alert.alert('Erro', 'Ocorreu um erro ao carregar as informações.');
        console.error(error);
      }
    };

    fetchCompanyAndLabels();
  }, []);

  // Filtra as labels que pertencem aos departamentos da empresa do headId
  const filteredLabels = labels.filter((label) => {
    const department = departments.find(dep => dep.id === label.departmentId);
    return department && department.companyId === companyId;
  });

  // Função para lidar com a seleção da label
  const handleSelectLabel = async (labelId: number) => {
    try {
      const label = await getLabelById(labelId);
      if (label) {
        setSelectedLabelId(label.id!);
        setName(label.name);
        setDescription(label.description);
        
        // Encontrar o departamento da label
        const department = departments.find(dep => dep.id === label.departmentId);
        if (department) {
          setDepartmentName(department.name ?? ""); // Garante que o valor será uma string
          setDepartmentId(department.id ?? ""); // Garante que o valor será uma string
        } else {
          Alert.alert('Erro', 'Departamento não encontrado.');
        }
      } else {
        Alert.alert('Erro', 'Label não encontrada.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao buscar os dados da label.');
    }
  };

  // Função para atualizar a label
  const handleUpdateLabel = async () => {
    if (!name || !description || !selectedLabelId || !departmentId) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    try {
      await updateLabel(selectedLabelId, { name, description, departmentId }); // Passa o departmentId correto
      Alert.alert('Sucesso', 'Label atualizada com sucesso!');
      navigation.goBack(); // Volta para a tela anterior
    } catch (error) {
      console.error(`Erro ao atualizar o label com ID ${selectedLabelId}:`, error);
      Alert.alert('Erro', 'Ocorreu um erro ao atualizar a label.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.screenContainer}>
        <Modal2
          jobDetails="Editar Label"
          component1={require("@/src/assets/images/component-11.png")}
          component1IconLeft={93}
        />
        <View style={styles.container}>  
        <Text style={styles.title}>Selecione uma Label para Editar</Text>

        {/* Lista de Labels */}
        <FlatList
          data={filteredLabels} // Exibe apenas as labels da empresa do headId
          keyExtractor={(item) => item.id!.toString()}
          renderItem={({ item }) => (
            <View style={styles.labelItem}>
              <Text style={styles.labelText}>{item.name}</Text>
              <Button1
                text="Editar"
                onPress={() => handleSelectLabel(item.id!)}
              />
            </View>
          )}
        />

        {/* Formulário de Edição (somente aparece após seleção de uma label) */}
        {selectedLabelId && (
          <View style={styles.editSection}>
            <Text style={styles.label}>Nome do Departamento: {departmentName}</Text>
            <Text style={styles.label}>Nome da Label</Text>
            <TextInput1
              value={name}
              onChangeText={setName}
              text="Nome da Label"
              textInputWidth="unset"
              textInputAlignSelf="stretch"
              textInputBackgroundColor="#f5f5f5"
              textInputBorderColor="#765ac6"
              textInputPaddingVertical="unset"
            />
            <Text style={styles.label}>Descrição da Label</Text>
            <TextInput1
              value={description}
              onChangeText={setDescription}
              text="Descrição da Label"
              textInputWidth="unset"
              textInputAlignSelf="stretch"
              textInputBackgroundColor="#f5f5f5"
              textInputBorderColor="#765ac6"
              textInputPaddingVertical="unset"
            />
            <Button1
              text="Salvar Alterações"
              onPress={handleUpdateLabel}
              buttonPosition="relative"
              buttonTop={10}
              buttonWidth="90%"
              buttonAlignSelf="center"
            />
          </View>
        )}
      </View>
      </View>
    </SafeAreaView>
  );
};

export default EditarLabel;
