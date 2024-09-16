import React, { useState, useEffect } from "react";
import { Image } from 'expo-image';
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useCompany } from '@/src/app/hooks/useCompany'; // Hook do contexto de empresas
import FrameComponent from "@/src/components/company/FrameComponent"; // Componente para a barra de busca
import Button1 from "@/src/components/company/Button1";
import Modal2 from "@/src/components/company/Modal2";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const BuscarEmpresas = () => {
  const { companies, loadCompanies } = useCompany(); // Hook para acessar as empresas
  const [filteredCompanies, setFilteredCompanies] = useState(companies); // Estado para empresas filtradas
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation(); // Hook de navegação

  // Carregar empresas quando o componente for montado
  useEffect(() => {
    loadCompanies(); // Carrega as empresas ao iniciar
  }, []);

  // Atualiza a lista filtrada quando a lista de empresas ou a consulta de busca mudar
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredCompanies(companies);
    } else {
      const filtered = companies.filter(company => 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCompanies(filtered);
    }
  }, [searchQuery, companies]);

  // Função para navegar para os detalhes da empresa
  const handleDetailsPress = (id: string) => {
    navigation.navigate('DetalhesDaEmpresa', { id });
  };

  // Função para navegar para a edição da empresa
  const handleEditPress = (id: string) => {
    navigation.navigate('EditarEmpresa', { id });
  };

  return (
    <SafeAreaView style={styles.buscarEmpresas}>
      {/* <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.component1Icon}
            contentFit="cover"
            source={require("@/src/assets/images/component-1.png")} // Essa é a seta
          />
        </TouchableOpacity>
        <Text style={styles.jobDetails}>Buscar Empresas</Text>
      </View> */}
      <Modal2
        jobDetails="Buscar Empresas"
        component1={require("@/src/assets/images/component-11.png")}
        showSearchBar={false}
        component1IconLeft={93}
        cardano2={require("@/src/assets/images/cardano-22.png")}
        showFrameView={false}
      />
      
      {/* Campo de busca com FrameComponent */}
      <View style={styles.searchContainer}>
        <FrameComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>

      {/* Lista de empresas */}
      <FlatList
        data={filteredCompanies}
        keyExtractor={(item, index) => item.id ? item.id : index.toString()}
        renderItem={({ item }) => (
          <View style={styles.companyItem}>
            <Text style={styles.companyName}>{item.name}</Text>
            <Text style={styles.companyEmail}>{item.email}</Text>
            <View style={styles.actionButtons}>
              {/* Botão de Detalhes */}
              <TouchableOpacity style={styles.detailsButton} onPress={() => item.id && handleDetailsPress(item.id)}>
                <Button1
                  text="Detalhes"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonAlignSelf="flex-start"
                  buttonHeight="unset"
                />
              </TouchableOpacity>

              {/* Botão de Editar */}
              <TouchableOpacity style={styles.editButton} onPress={() => item.id && handleEditPress(item.id)}>
                <Button1
                  text="Editar"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonAlignSelf="flex-start"
                  buttonHeight="unset"
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default BuscarEmpresas;
