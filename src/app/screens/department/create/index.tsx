import React, { useState } from "react";
import { Text, View, Alert, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { useDepartment } from "@/src/app/hooks/useDepartment"; // Hook de departamento
import TextInput1 from "@/src/components/company/TextInput1";
import Button1 from "@/src/components/company/Button1";
import styles from "./styles";

const CriarDepartamento = () => {
  const [name, setName] = useState('');
  const [companyId, setCompanyId] = useState(''); // Input para receber o ID da empresa

  const { createDepartment } = useDepartment();
  const navigation = useNavigation();

  const handleCreateDepartment = async () => {
    if (!name || !companyId) {
      Alert.alert('Erro', 'O nome do departamento e o ID da empresa são obrigatórios.');
      return;
    }

    const departmentData = { name, companyId };

    try {
      await createDepartment(departmentData);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.criarDepartamento}>
      <View style={styles.modal}>
        <View style={styles.appBar}>
          <Text style={styles.jobDetails}>Criar Departamento</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.component1Icon}
              contentFit="cover"
              source={require("@/src/assets/images/component-1.png")}
            />
          </TouchableOpacity>
        </View>

        <TextInput1
          value={name}
          onChangeText={setName}
          text="Nome do Departamento"
        />
        <TextInput1
          value={companyId}
          onChangeText={setCompanyId}
          text="ID da Empresa"
        />
        <Button1
          text="Criar"
          onPress={handleCreateDepartment}
        />
      </View>
    </View>
  );
};

export default CriarDepartamento;
