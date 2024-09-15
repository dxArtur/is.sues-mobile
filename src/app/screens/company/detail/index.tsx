import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { useRoute, RouteProp } from '@react-navigation/native';
import { useCompany } from "@/src/app/hooks/useCompany";
import MapView, { Marker } from 'react-native-maps'; // Importando o MapView e Marker
import Modal2 from "@/src/components/company/Modal2";
import JobDetail from "@/src/components/company/JobDetail";
import Button1 from "@/src/components/company/Button1";
import styles from "./styles";
import { CompanyDto } from "@/src/dtos/CompanyDTO";
import { SafeAreaView } from "react-native-safe-area-context";

// Tipagem para a rota
type DetalhesDaEmpresaRouteProp = RouteProp<ReactNavigation.RootParamList, 'DetalhesDaEmpresa'>;

const DetalhesDaEmpresaDescrio = () => {
  const route = useRoute<DetalhesDaEmpresaRouteProp>();
  const { id } = route.params || {}; // Verifica se id existe
  const { companies } = useCompany();
  
  // Permitir que o estado seja 'null' ou 'undefined'
  const [company, setCompany] = useState<CompanyDto | null>(null);

  // Busca a empresa pelo ID
  useEffect(() => {
    if (id) {
      const foundCompany = companies.find(c => c.id === id);
      setCompany(foundCompany || null); // Se não encontrar, definir como null
    }
  }, [id, companies]);

  // Caso o id não exista
  if (!id) {
    return <Text>Id da empresa não fornecido.</Text>;
  }

  // Caso a empresa não seja encontrada ou esteja sendo carregada
  if (!company) {
    return <Text>Carregando empresa...</Text>;
  }

  // Se latitude ou longitude não estiverem disponíveis, oculta o mapa
  const showMap = company.latitude && company.longitude;

  return (
    <SafeAreaView style={styles.detalhesDaEmpresaDescri}>
      <Modal2
        jobDetails="Detalhes da Empresa"
        component1={require("@/src/assets/images/component-11.png")}
        showSearchBar={false}
        component1IconLeft={93}
        cardano2={require("@/src/assets/images/cardano-22.png")}
        showFrameView={false}
      />
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
                latitude: company.latitude ?? 0, // Valor padrão para latitude
                longitude: company.longitude ?? 0, // Valor padrão para longitude
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

        <Button1
          text="Apagar Empresa"
          buttonPosition="absolute"
          buttonTop={596}
          buttonLeft={6}
          buttonWidth={327}
          buttonAlignSelf="unset"
          buttonHeight="unset"
        />
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
