import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, SafeAreaView, Alert, ActivityIndicator } from "react-native";
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useCompany } from "@/src/app/hooks/useCompany";
import { useDepartment } from "@/src/app/hooks/useDepartment";
import styles from "./styles";
import { CompanyDto } from "@/src/dtos/CompanyDTO";
import { UsersDto } from "@/src/dtos/UserDTO";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Padding, Border, FontSize, Color, Gap } from "@/GlobalStyles";
import Button1 from "@/src/components/company/Button1";
import Modal2 from "@/src/components/company/Modal2";
import { useNavigation } from '@react-navigation/native';

const CompanyManagementScreen = ( ) => {
  const { companies, loadCompanies } = useCompany();
  const { loadDepartments } = useDepartment();
  const [company, setCompany] = useState<CompanyDto | null>(null);
  const [isHead, setIsHead] = useState(false);
  const [user, setUser] = useState<UsersDto | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); 

  // Função para buscar o companyId do AsyncStorage e carregar a empresa
  const loadCompanyData = async () => {
    try {
      const storedCompanyId = await AsyncStorage.getItem('@companyId');
      const storedUser = await AsyncStorage.getItem('@user');
      const userData = storedUser ? JSON.parse(storedUser) : null;
      setUser(userData);

      let companyId: string | null = storedCompanyId;

      if (companyId) {
        if (companies.length === 0) {
          await loadCompanies();
        }
        const foundCompany = companies.find(c => c.id === companyId);
        if (foundCompany) {
          setCompany(foundCompany || null);
          if (foundCompany.headid === userData.id) {
            setIsHead(true);
          }
        }
      } else {
        console.error("Não foi possível carregar os dados da empresa.");
      }
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados da empresa.", error);
    } finally {
      setLoading(false);
    }
  };
  const handleEditCompany = () => {
    if (company && company.id) {
      navigation.navigate('EditarEmpresa', { id: company.id as string });
    } else {
      Alert.alert("Erro", "ID da empresa não encontrado.");
    }
  };
  const handleCreateDepartment = () => {
    if (company && company.id) {
      navigation.navigate('CriarDepartamento');
    } else {
      Alert.alert("Erro", "ID da empresa não encontrado.");
    }
  };
  const handleEditDepartment = () => {
    if (company && company.id) {
      navigation.navigate('EditarDepartamentos');
    } else {
      Alert.alert("Erro", "ID da empresa não encontrado.");
    }
  }; 
  const handleDeleteDepartment = () => {
    if (company && company.id) {
      navigation.navigate('DeletarDepartamentos');
    } else {
      Alert.alert("Erro", "ID da empresa não encontrado.");
    }
  };   
  const handleCreateUser = () => {
    if (company && company.id) {
      navigation.navigate('CriarFuncionario');
    } else {
      Alert.alert("Erro", "ID da empresa não encontrado.");
    }
  };  
  const handleSelectUser = () => {
    if (company && company.id) {
      navigation.navigate('SelecionarFuncionarioParaEditar');
    } else {
      Alert.alert("Erro", "ID da empresa não encontrado.");
    }
  }; 
  const handleDeleteUser = () => {
    if (company && company.id) {
      navigation.navigate('DeletarFuncionario');
    } else {
      Alert.alert("Erro", "ID da empresa não encontrado.");
    }
  }; 
  const handleCreateLabel = () => {
    if (company && company.id) {
      navigation.navigate('CriarLabel');
    } else {
      Alert.alert("Erro", "ID da empresa não encontrado.");
    }
  };  
  const handleEditLabel = () => {
    if (company && company.id) {
      navigation.navigate('EditarLabel');
    } else {
      Alert.alert("Erro", "ID da empresa não encontrado.");
    }
  }; 
  const handleDeleteLabel = () => {
    if (company && company.id) {
      navigation.navigate('DeletarLabel');
    } else {
      Alert.alert("Erro", "ID da empresa não encontrado.");
    }
  }; 
  // Carregar dados da empresa ao montar o componente
  useEffect(() => {
    loadCompanyData();
    loadDepartments();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Color.primaryRegular} />
        <Text style={styles.loadingText}>Carregando dados da empresa...</Text>
      </View>
    );
  }

  if (!company) {
    return <Text>Empresa não encontrada.</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.managementScreenContainer}>
            {/* Modal2 para voltar à página anterior */}
            <Modal2
                jobDetails="Gerenciamento"
                component1={require("@/src/assets/images/component-11.png")}
                component1IconLeft={93}
            />
            {/* Mensagem de boas-vindas */}
            <Text style={styles.welcomeText}>
                Olá, {user?.name}, bem-vindo(a) à página de gerenciamento da empresa {company.name}.
            </Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Seção Empresa */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}><FontAwesome name="building" size={20} /> Empresa</Text>
                    <Button1
                    text="Editar Empresa"
                    onPress={handleEditCompany}
                    buttonWidth="100%"
                    buttonAlignSelf="center"
                    buttonBackgroundColor={Color.primaryRegular}
                    marginVertical={Gap.gap_sm}
                    paddingHorizontal={Padding.p_xs}
                    paddingVertical={Padding.p_xs}
                    borderRadius={Border.br_base}
                    />
                </View>

                {/* Seção Departamentos */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}><FontAwesome6 name="building-user" size={20}/> Departamentos</Text>
                    <Button1
                    text="Criar Departamentos"
                    onPress={handleCreateDepartment}
                    buttonWidth="100%"
                    buttonAlignSelf="center"
                    buttonBackgroundColor={Color.primaryRegular}
                    marginVertical={Gap.gap_sm}
                    paddingHorizontal={Padding.p_xs}
                    paddingVertical={Padding.p_xs}
                    borderRadius={Border.br_base}
                    />
                    <Button1
                    text="Editar Departamento"
                    onPress={handleEditDepartment}
                    buttonWidth="100%"
                    buttonAlignSelf="center"
                    buttonBackgroundColor={Color.primaryRegular}
                    marginVertical={Gap.gap_sm}
                    paddingHorizontal={Padding.p_xs}
                    paddingVertical={Padding.p_xs}
                    borderRadius={Border.br_base}
                    />
                    <Button1
                    text="Apagar Departamento"
                    onPress={handleDeleteDepartment}
                    buttonWidth="100%"
                    buttonAlignSelf="center"
                    buttonBackgroundColor={Color.primaryRegular}
                    marginVertical={Gap.gap_sm}
                    paddingHorizontal={Padding.p_xs}
                    paddingVertical={Padding.p_xs}
                    borderRadius={Border.br_base}
                    />
                </View>

                {/* Seção Funcionários */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}><FontAwesome name="user" size={20}/> Funcionários</Text>
                    <Button1
                    text="Criar Funcionário"
                    onPress={handleCreateUser}
                    buttonWidth="100%"
                    buttonAlignSelf="center"
                    buttonBackgroundColor={Color.primaryRegular}
                    marginVertical={Gap.gap_sm}
                    paddingHorizontal={Padding.p_xs}
                    paddingVertical={Padding.p_xs}
                    borderRadius={Border.br_base}
                    />
                    <Button1
                    text="Editar Funcionário"
                    onPress={handleSelectUser}
                    buttonWidth="100%"
                    buttonAlignSelf="center"
                    buttonBackgroundColor={Color.primaryRegular}
                    marginVertical={Gap.gap_sm}
                    paddingHorizontal={Padding.p_xs}
                    paddingVertical={Padding.p_xs}
                    borderRadius={Border.br_base}
                    />
                    <Button1
                    text="Apagar Funcionário"
                    onPress={handleDeleteUser}
                    buttonWidth="100%"
                    buttonAlignSelf="center"
                    buttonBackgroundColor={Color.primaryRegular}
                    marginVertical={Gap.gap_sm}
                    paddingHorizontal={Padding.p_xs}
                    paddingVertical={Padding.p_xs}
                    borderRadius={Border.br_base}
                    />
                </View>
                {/* Seção Label */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}><MaterialIcons name="label" size={20} /> Label</Text>
                    <Button1
                    text="Criar Label"
                    onPress={handleCreateLabel}
                    buttonWidth="100%"
                    buttonAlignSelf="center"
                    buttonBackgroundColor={Color.primaryRegular}
                    marginVertical={Gap.gap_sm}
                    paddingHorizontal={Padding.p_xs}
                    paddingVertical={Padding.p_xs}
                    borderRadius={Border.br_base}
                    />
                    <Button1
                    text="Editar Label"
                    onPress={handleEditLabel}
                    buttonWidth="100%"
                    buttonAlignSelf="center"
                    buttonBackgroundColor={Color.primaryRegular}
                    marginVertical={Gap.gap_sm}
                    paddingHorizontal={Padding.p_xs}
                    paddingVertical={Padding.p_xs}
                    borderRadius={Border.br_base}
                    />
                    <Button1
                    text="Deletar Label"
                    onPress={handleDeleteLabel}
                    buttonWidth="100%"
                    buttonAlignSelf="center"
                    buttonBackgroundColor={Color.primaryRegular}
                    marginVertical={Gap.gap_sm}
                    paddingHorizontal={Padding.p_xs}
                    paddingVertical={Padding.p_xs}
                    borderRadius={Border.br_base}
                    />
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default CompanyManagementScreen;
