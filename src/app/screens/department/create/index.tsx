import React, { useState, useEffect } from "react";
import { Text, View, Alert, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { useDepartment } from "@/src/app/hooks/useDepartment";
import TextInput1 from "@/src/components/company/TextInput1";
import Button1 from "@/src/components/company/Button1";
import Modal2 from "@/src/components/company/Modal2";
import styles from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const CriarDepartamento = () => {
  const [name, setName] = useState('');
  const [companyId, setCompanyId] = useState('');

  const { createDepartment } = useDepartment();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCompanyId = async () => {
      const storedCompanyId = await AsyncStorage.getItem('@companyId');
      if (storedCompanyId) {
        setCompanyId(storedCompanyId);
      } else {
        Alert.alert('Erro', 'ID da empresa não encontrado.');
      }
    };
    fetchCompanyId();
  }, []);

  const handleCreateDepartment = async () => {
    if (!name || !companyId) {
      Alert.alert('Erro', 'O nome do departamento e o ID da empresa são obrigatórios.');
      return;
    }
    const departmentData = { name, companyId, users: [] };

    try {
      await createDepartment(departmentData);
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao criar o departamento.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screenContainer}>
        <Modal2
            jobDetails="Criar Departamento"
            component1={require("@/src/assets/images/component-11.png")}
            component1IconLeft={93}
          />
        <View style={styles.container}>
        <View style={styles.form}>
        <Text style={styles.label}>Nome do departamento</Text>
          <TextInput1
            value={name}
            onChangeText={setName}
            text="Nome do Departamento"
            textInputWidth="unset"
            textInputAlignSelf="stretch"
            textInputBackgroundColor="#f5f5f5"
            textInputBorderColor="#765ac6"
            textInputPaddingVertical="unset"
          />
          <Button1
            text="Criar Departamento"
            onPress={handleCreateDepartment}
            buttonPosition="relative"
            buttonTop={10}
            buttonWidth="90%"
            buttonAlignSelf="center"
          />
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CriarDepartamento;
