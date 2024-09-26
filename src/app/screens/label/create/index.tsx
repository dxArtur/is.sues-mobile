import React, { useState, useEffect } from "react";
import { Text, View, Alert, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLabel } from "@/src/app/hooks/useLabel";
import { useDepartment } from "@/src/app/hooks/useDepartment";
import TextInput1 from "@/src/components/company/TextInput1";
import Button1 from "@/src/components/company/Button1";
import Modal2 from "@/src/components/company/Modal2";
import styles from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const CriarLabel = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [departmentId, setDepartmentId] = useState<string | null>(null);
  const [companyId, setCompanyId] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const { createLabel } = useLabel();
  const { departments, loadDepartments } = useDepartment()
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCompanyIdAndDepartments = async () => {
      const storedCompanyId = await AsyncStorage.getItem('@companyId');
      if (storedCompanyId) {
        setCompanyId(storedCompanyId);
        await loadDepartments(); 
      } else {
        Alert.alert('Erro', 'ID da empresa não encontrado.');
      }
    };
    fetchCompanyIdAndDepartments();
  }, []);

  const handleCreateLabel = async () => {
    if (!name || !description || !selectedDepartment) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    const labelData = { name, description, departmentId: selectedDepartment };

    try {
      await createLabel(labelData);
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao criar a label.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screenContainer}>
        <Modal2
          jobDetails="Criar Label"
          component1={require("@/src/assets/images/component-11.png")}
          component1IconLeft={93}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Selecione um Departamento</Text>
          <FlatList
            data={departments.filter(department => department.companyId === companyId)}
            keyExtractor={(item) => item.id!}
            renderItem={({ item }) => (
              <View style={styles.departmentItem}>
                <Text style={styles.departmentText}>{item.name}</Text>
                <Button1
                  text="Selecionar"
                  onPress={() => {
                    if(item.id){
                    setSelectedDepartment(item.id);
                    }
                  }}
                />
              </View>
            )}
          />

          {selectedDepartment && (
            <View style={styles.form}>
              <Text style={styles.label}>Nome da label</Text>
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
              <Text style={styles.label}>Descrição da label</Text>
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
                text="Criar Label"
                onPress={handleCreateLabel}
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

export default CriarLabel;
