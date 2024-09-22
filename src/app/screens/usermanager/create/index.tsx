import React, { useState, useEffect } from "react";
import { View, Text, Alert, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation, CommonActions } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from "@/src/app/hooks/useAuth"; // Importa o contexto de autenticação
import { useDepartment } from "@/src/app/hooks/useDepartment"; // Hook de departamento para carregar departamentos
import Modal2 from "@/src/components/company/Modal2";
import TextInput1 from "@/src/components/company/TextInput1";
import Button1 from "@/src/components/company/Button1";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { DepartmentDto } from "@/src/dtos/DepartmentDTO"; // Certifique-se de que o DTO está sendo importado

const CriarFuncionario = () => {
  const { signUp } = useAuth(); // Função de cadastro do contexto Auth
  const { departments, loadDepartments } = useDepartment(); // Carrega os departamentos
  const [filteredDepartments, setFilteredDepartments] = useState<DepartmentDto[]>([]); // Definir tipo correto
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [occupation, setOccupation] = useState("");
  const [departmentId, setDepartmentId] = useState<string | null>(null); // Departamento selecionado
  const [companyId, setCompanyId] = useState<string | null>(null);
  const [showDepartments, setShowDepartments] = useState(false); // Estado para controlar exibição da lista
  const navigation = useNavigation();

  // Carrega o companyId do AsyncStorage e filtra departamentos
  useEffect(() => {
    const fetchCompanyIdAndDepartments = async () => {
      try {
        const storedCompanyId = await AsyncStorage.getItem("@companyId");
        if (storedCompanyId) {
          setCompanyId(storedCompanyId);
          await loadDepartments(); // Carrega todos os departamentos
          
          // Filtra os departamentos com base no companyId
          const filtered = departments.filter(dept => dept.companyId === storedCompanyId);
          setFilteredDepartments(filtered); // Define os departamentos filtrados
        } else {
          Alert.alert("Erro", "ID da empresa não encontrado.");
        }
      } catch (error) {
        Alert.alert("Erro", "Ocorreu um erro ao carregar os departamentos.");
      }
    };
    fetchCompanyIdAndDepartments();
  }, [departments]);

  const handleCreateUser = async () => {
    if (!name || !email || !password || !occupation || !departmentId) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    try {
      const isAdmin = false;
      await signUp(name, occupation, email, password, isAdmin, departmentId);
      Alert.alert("Sucesso", "Funcionário cadastrado com sucesso!");
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'DetalhesDaEmpresa' }],
        })
      );
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao cadastrar o funcionário.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Modal2
          jobDetails="Cadastrar Funcionário"
          component1={require("@/src/assets/images/component-11.png")}
          component1IconLeft={93}
        />
        <Text style={styles.title}>Preencha os dados do Funcionário</Text>

        {/* Rótulos e campos de input */}
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

        <Text style={styles.label}>Senha do Funcionário</Text>
        <TextInput1
          value={password}
          onChangeText={setPassword}
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

        {/* Selecionar Departamento */}
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
          text="Cadastrar Funcionário"
          onPress={handleCreateUser}
        />
      </View>
    </SafeAreaView>
  );
};

export default CriarFuncionario;
