import React, { useEffect, useState } from "react";
import { Text, View, Alert } from "react-native";
import { useCompany } from "@/src/app/hooks/useCompany";
import MapView, { Marker } from 'react-native-maps'; // Importando o MapView e Marker
import Modal2 from "@/src/components/company/Modal2";
import JobDetail from "@/src/components/company/JobDetail";
import Button1 from "@/src/components/company/Button1";
import styles from "./styles";
import { CompanyDto } from "@/src/dtos/CompanyDTO";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage para pegar o headid e companyId

const DetalhesDaEmpresaDescrio = () => {
  const { companies, loadCompanies } = useCompany(); // Certifique-se de carregar as empresas
  const [company, setCompany] = useState<CompanyDto | null>(null); // Estado para armazenar a empresa
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [isHead, setIsHead] = useState(false); // Estado para verificar se o usuário é o headid

  // Função para buscar o companyId ou headid do AsyncStorage e carregar a empresa
  const loadCompanyData = async () => {
    try {
      const storedCompanyId = await AsyncStorage.getItem('@companyId');
      const storedUser = await AsyncStorage.getItem('@user');
      const user = storedUser ? JSON.parse(storedUser) : null;

      console.log("Company ID Armazenado:", storedCompanyId);
      console.log("Dados do Usuário Armazenado:", user);

      // Verifica se o usuário é chefe (headid) ou funcionário (departmentId)
      let companyId: string | null = storedCompanyId;
      
      if (!companyId && user) {
        // Se não houver companyId armazenado, busca o companyId via departamento
        companyId = user.department?.companyId || null;
      }

      console.log("Company ID Determinado:", companyId);

      if (companyId) {
        // Verifique se as empresas foram carregadas antes de procurar
        if (companies.length === 0) {
          console.log("Nenhuma empresa carregada, forçando o carregamento...");
          await loadCompanies(); // Força o carregamento das empresas se ainda não foi feito
        }

        // Encontra a empresa correspondente
        const foundCompany = companies.find(c => c.id === companyId);
        console.log("Empresa Encontrada:", foundCompany);

        if (foundCompany) {
          setCompany(foundCompany || null);
          // Verifica se o usuário logado é o headid da empresa
          if (foundCompany.headid === user.id) {
            setIsHead(true); // Usuário é o headid
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
  }, [companies]);

  // Caso os dados ainda estejam sendo carregados
  if (loading) {
    return <Text>Carregando empresa...</Text>;
  }

  // Caso a empresa não seja encontrada
  if (!company) {
    return <Text>Empresa não encontrada.</Text>;
  }

  // Se latitude ou longitude não estiverem disponíveis, oculta o mapa
  const showMap = company.latitude && company.longitude;

  return (
    <View style={styles.detalhesDaEmpresaDescri}>
      <View style={[styles.jobDetailParent, styles.pngwingcom71Position]}>
        {showMap ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: company.latitude ?? 0, // Valor padrão para latitude
              longitude: company.longitude ?? 0, // Valor padrão para longitude
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: company.latitude ?? 0,
                longitude: company.longitude ?? 0,
              }}
              title={company.name}
              description={company.description || "Descrição não disponível"}
            />
          </MapView>
        ) : (
          <Text style={styles.noMapText}>Localização não disponível</Text>
        )}
        <JobDetail />
        <View
          style={[styles.jobDescriptionParent, styles.jobDescriptionParentPosition]}
        >
          <Text style={[styles.jobDescription, styles.remoteFlexBox]}>
            {company.description || "Descrição não disponível"}
          </Text>
        </View>
        <Text style={[styles.salary, styles.salaryTypo]}>{company.email}</Text>
        <Text style={[styles.remote, styles.k11kTypo]}>{company.name}</Text>

        {/* Exibe o botão "Apagar Empresa" apenas se o usuário for o headid */}
        {isHead && (
          <Button1
            text="Apagar Empresa"
            buttonPosition="absolute"
            buttonTop={550}
            buttonLeft={6}
            buttonWidth={327}
            buttonAlignSelf="unset"
            buttonHeight="unset"
          />
        )}
      </View>
      <View style={styles.descriptionParent}>
        <View style={[styles.description, styles.descriptionLayout]}>
          <Text style={[styles.description1, styles.description1Typo]}>
            Descrição
          </Text>
        </View>
        <View style={[styles.requirement, styles.descriptionLayout]}>
          <Text style={[styles.requirement1, styles.description1Typo]}>
            Departamentos
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetalhesDaEmpresaDescrio;
