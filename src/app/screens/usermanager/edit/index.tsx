import React, { useState, useEffect } from "react";
import { View, Text, Alert, SafeAreaView, TouchableOpacity } from "react-native";
import { useRoute, useNavigation, CommonActions } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from "@/src/app/hooks/useAuth";
import { useDepartment } from "@/src/app/hooks/useDepartment";
import Modal2 from "@/src/components/company/Modal2";
import TextInput1 from "@/src/components/company/TextInput1";
import Button1 from "@/src/components/company/Button1";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { DepartmentDto } from "@/src/dtos/DepartmentDTO";

type EditarFuncionarioRouteProp = {
  id: string;
};

const EditarFuncionario = () => {
  const { updateUser, getEmployeeById } = useAuth();
  const { departments, loadDepartments } = useDepartment();
  const [filteredDepartments, setFilteredDepartments] = useState<DepartmentDto[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [occupation, setOccupation] = useState("");
  const [departmentId, setDepartmentId] = useState<string | null>(null);
  const [companyId, setCompanyId] = useState<string | null>(null);
  const [showDepartments, setShowDepartments] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  
  const { id } = route.params as EditarFuncionarioRouteProp; 

  useEffect(() => {
    const fetchCompanyIdAndUser = async () => {
      const storedCompanyId = await AsyncStorage.getItem("@companyId");
      if (storedCompanyId) {
        setCompanyId(storedCompanyId);
        await loadDepartments();
        
        const filtered = departments.filter(dept => dept.companyId === storedCompanyId);
        setFilteredDepartments(filtered);
      } else {
        Alert.alert("Erro", "ID da empresa não encontrado.");
      }

      const employeeData = await getEmployeeById(id);
      if (employeeData) {
        setName(employeeData.name);
        setEmail(employeeData.email);
        setOccupation(employeeData.occupation);
        setDepartmentId(employeeData.departmentId || null);
      }
    };
    fetchCompanyIdAndUser();
    loadDepartments();
  }, [id]);

  const handleUpdateUser = async () => {
    if (!name || !email || !occupation || !departmentId) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    try {
      await updateUser(id, name, occupation, email, departmentId);
      Alert.alert("Sucesso", "Funcionário atualizado com sucesso!");
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'DetalhesDaEmpresa' }],
        })
      );
    } catch (error: any) {
      console.error("Erro ao atualizar o funcionário:", error.response ? error.response.data : error.message);
      Alert.alert("Erro", "Ocorreu um erro ao atualizar o funcionário.");
    }
    
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Modal2
          jobDetails="Editar Funcionário"
          component1={require("@/src/assets/images/component-11.png")}
          component1IconLeft={93}
        />
        <Text style={styles.title}>Edite os dados do Funcionário</Text>

        <Text style={styles.label}>Nome do Funcionário</Text>
        <TextInput1
          value={name}
          onChangeText={setName}
          text=""
          textInputWidth="unset"
          textInputAlignSelf="stretch"
          textInputBackgroundColor="#f5f5f5"
          textInputBorderColor="#765ac6"
          textInputPaddingVertical="unset"
        />

        <Text style={styles.label}>Email do Funcionário</Text>
        <TextInput1
          value={email}
          onChangeText={setEmail}
          text=""
          textInputWidth="unset"
          textInputAlignSelf="stretch"
          textInputBackgroundColor="#f5f5f5"
          textInputBorderColor="#765ac6"
          textInputPaddingVertical="unset"
        />

        <Text style={styles.label}>Cargo do Funcionário</Text>
        <TextInput1
          value={occupation}
          onChangeText={setOccupation}
          text=""
          textInputWidth="unset"
          textInputAlignSelf="stretch"
          textInputBackgroundColor="#f5f5f5"
          textInputBorderColor="#765ac6"
          textInputPaddingVertical="unset"
        />

        <Text style={styles.label}>Departamento</Text>
        <TouchableOpacity
          style={styles.selectButton}
          onPress={() => setShowDepartments(!showDepartments)}
        >
          <Text style={styles.selectButtonText}>
            {departmentId ? filteredDepartments.find(d => d.id === departmentId)?.name : "Selecionar Departamento"}
          </Text>
          <FontAwesome name={showDepartments ? "chevron-up" : "chevron-down"} size={16} color="gray" />
        </TouchableOpacity>

        {showDepartments && (
          <View style={styles.departmentDropdown}>
            {filteredDepartments.length > 0 ? (
              filteredDepartments.map((department) => (
                <TouchableOpacity
                  key={department.id}
                  style={styles.departmentItem}
                  onPress={() => {
                    if (department.id) {
                      setDepartmentId(department.id);
                      setShowDepartments(false);
                    }
                  }}
                >
                  <Text style={styles.departmentText}>{department.name}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text>Carregando departamentos...</Text>
            )}
          </View>
        )}

        <Button1
          text="Salvar Alterações"
          onPress={handleUpdateUser}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditarFuncionario;
