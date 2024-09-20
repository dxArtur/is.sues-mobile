import React, { useEffect, useState } from "react";
import { Text, View, Alert, FlatList } from "react-native";
import { useCompany } from "@/src/app/hooks/useCompany";
import { useDepartment } from "@/src/app/hooks/useDepartment";
import CompanyMapView from "@/src/components/company/CompanyMapView";
import Button1 from "@/src/components/company/Button1";
import styles from "./styles";
import { CompanyDto } from "@/src/dtos/CompanyDTO";
import { DepartmentDto } from "@/src/dtos/DepartmentDTO";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import { Padding, Border } from "@/GlobalStyles";

const DetalhesDaEmpresaDescrio = () => {
  const { companies, loadCompanies } = useCompany();
  const [company, setCompany] = useState<CompanyDto | null>(null);
  const { departments, loadDepartments, getDepartmentById } = useDepartment();
  const [loading, setLoading] = useState(true);
  const [isHead, setIsHead] = useState(false);
  const [activeTab, setActiveTab] = useState("descricao");

  // Função para buscar o companyId ou headid do AsyncStorage e carregar a empresa
  const loadCompanyData = async () => {
    try {
      const storedCompanyId = await AsyncStorage.getItem('@companyId');
      const storedUser = await AsyncStorage.getItem('@user');
      const user = storedUser ? JSON.parse(storedUser) : null;
      // Verifica se o usuário é chefe (headid) ou funcionário (departmentId)
      let companyId: string | null = storedCompanyId;
      
      if (!companyId && user && user.departmentId) {
        const department = await getDepartmentById(user.departmentId);
        if (department) {
          companyId = department.companyId;
        }
      }
      if (companyId) {
        if (companies.length === 0) {
          await loadCompanies();
        }
        const foundCompany = companies.find(c => c.id === companyId);

        if (foundCompany) {
          setCompany(foundCompany || null);
          // Verifica se o usuário logado é o headid da empresa
          if (foundCompany.headid === user.id) {
            setIsHead(true);
          }
        }
      } else {
        Alert.alert("Erro", "Não foi possível carregar os dados da empresa.");
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao buscar os dados da empresa.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Carregar dados da empresa ao montar o componente
  useEffect(() => {
    loadCompanyData();
    loadDepartments();
  }, [companies]);

  useEffect(() => {
  }, [departments]);

  if (loading) {
    return <Text>Carregando empresa...</Text>;
  }

  if (!company) {
    return <Text>Empresa não encontrada.</Text>;
  }
  const renderDepartments = () => {
    const companyDepartments = departments.filter(
      (department: DepartmentDto) => department.companyId === company?.id
    );

    if (companyDepartments.length === 0) {
      return <Text style={styles.descriptionText}>Nenhum departamento encontrado.</Text>;
    }

    return (
      <View style={styles.descriptionSection}>
        <Text style={styles.descriptionTitle}>Departamentos</Text>
        <View style={styles.departmentListContainer}>
        <FlatList
          data={companyDepartments}
          keyExtractor={(item) => item.id!}
          renderItem={({ item }) => (
            <Text style={styles.descriptionText}><FontAwesome name="circle" size={15} /> {item.name}</Text>
          )}
          showsVerticalScrollIndicator={true}
        />
        </View>
      </View>
    );
  };

  const renderContent = () => {
    if (activeTab === "descricao") {
      return (
        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionTitle}>Descrição da Empresa</Text>
          <Text style={styles.descriptionText}>
            {company.description || "Descrição não disponível"}
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          {renderDepartments()}
        </View>
      );
    }
  };

  return (
    <View style={styles.detalhesDaEmpresaDescri}>
      <CompanyMapView
        latitude={company.latitude ?? 0}
        longitude={company.longitude ?? 0}
        companyName={company.name}
        companyDescription={company.description || "Descrição não disponível"}
      />
      <View style={styles.companyDetails}>
        <View style={styles.detailItem}>
          <FontAwesome name="envelope" size={40} color="#FF0000" />
          <Text style={styles.companyDetailText}>{company.email}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome name="building" size={40} color="#7D7D7D" />
          <Text style={styles.companyDetailText}>{company.name}</Text>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <Button1
          text="Descrição"
          onPress={() => setActiveTab("descricao")}
          buttonBackgroundColor={activeTab === "descricao" ? "#765AC6" : "#D3D3D3"}
          textColor={activeTab === "descricao" ? "#fff" : "#765AC6"}
          buttonWidth="80%"
          paddingHorizontal={Padding.p_sm}
          paddingVertical={Padding.p_sm}
          borderRadius={Border.br_47xl}
          buttonAlignSelf="center"
        />
        <Button1
          text="Departamentos"
          onPress={() => setActiveTab("departamentos")}
          buttonBackgroundColor={activeTab === "departamentos" ? "#765AC6" : "#D3D3D3"}
          textColor={activeTab === "departamentos" ? "#fff" : "#765AC6"}
          buttonWidth="80%"
          buttonAlignSelf="center"
          paddingHorizontal={Padding.p_sm}
          paddingVertical={Padding.p_sm}
          borderRadius={Border.br_47xl}
        />
    </View>

    {renderContent()}

    <View style={{ marginTop: 20 }}> 
      {isHead && (
        <Button1
          text="Gerenciar"
          buttonWidth="100%"
          buttonAlignSelf="center"
        />
      )}
    </View>

    </View>
  );
};

export default DetalhesDaEmpresaDescrio;
