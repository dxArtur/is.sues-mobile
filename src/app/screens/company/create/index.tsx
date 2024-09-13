import React, { useState } from 'react';
import { View, Alert, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import TextInput1 from "@/src/components/company/TextInput1";
import Modal2 from '@/src/components/company/Modal2';
import Button1 from "@/src/components/company/Button1";
import { useCompany } from '@/src/app/hooks/useCompany';
import styles from "./styles";
import { CompanyDto } from '@/src/dtos/CompanyDTO';

const CriarEmpresa = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [description, setDescription] = useState('');

  const { createCompany } = useCompany(); 
  const navigation = useNavigation(); // Hook de navegação

  const handleCreateCompany = async () => {
    const companyData: CompanyDto = {
      name,
      email,
      password,
      ...(latitude ? { latitude: parseFloat(latitude) } : {}),
      ...(longitude ? { longitude: parseFloat(longitude) } : {}),
      ...(description ? { description } : {})
    };

    try {
      await createCompany(companyData);
      Alert.alert('Sucesso', 'Empresa criada com sucesso!');
      navigation.navigate('BuscarEmpresas'); // Redireciona para a página de Buscar Empresas
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao criar a empresa');
      console.error(error);
    }
  };

  return (
    <View style={styles.criarEmpresa}>
      <View style={[styles.modal, styles.modalFlexBox]}>
        {/* <View style={styles.appBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.component1Icon}
              contentFit="cover"
              source={require("@/src/assets/images/component-1.png")} // Essa é a seta
            />
          </TouchableOpacity>
          <Text style={styles.jobDetails}>Criar Empresa</Text>
        </View> */}
        <Modal2
          jobDetails="Criar Empresa"
          component1={require("@/src/assets/images/component-11.png")}
          showSearchBar={false}
          component1IconLeft={93}
          cardano2={require("@/src/assets/images/cardano-22.png")}
          showFrameView={false}
        />
        <View style={[styles.container, styles.modalFlexBox]}>
          <View style={styles.heading}>
            <Text style={styles.informaOsDetalhes}>
              Informe os detalhes da empresa!
            </Text>
          </View>
          <View style={styles.heading}>
            <View style={styles.form}>
              <View style={styles.input}>
                <TextInput1
                  value={name}
                  onChangeText={setName}
                  text="Nome da empresa"
                  textInputWidth="unset"
                  textInputAlignSelf="stretch"
                  textInputBackgroundColor="#f5f5f5"
                  textInputBorderColor="#765ac6"
                  textInputPaddingVertical="unset"
                />
                <TextInput1
                  value={email}
                  onChangeText={setEmail}
                  text="Email da empresa"
                  textInputWidth="unset"
                  textInputAlignSelf="stretch"
                  textInputBackgroundColor="#f5f5f5"
                  textInputBorderColor="#765ac6"
                  textInputPaddingVertical="unset"
                />
                <TextInput1
                  value={password}
                  onChangeText={setPassword}
                  text="Senha da empresa"
                  textInputWidth="unset"
                  textInputAlignSelf="stretch"
                  textInputBackgroundColor="#f5f5f5"
                  textInputBorderColor="#765ac6"
                  textInputPaddingVertical="unset"
                />
                <TextInput1
                  value={latitude}
                  onChangeText={setLatitude}
                  text="Latitude"
                  textInputWidth="unset"
                  textInputAlignSelf="stretch"
                  textInputBackgroundColor="#f5f5f5"
                  textInputBorderColor="#765ac6"
                  textInputPaddingVertical="unset"
                />
                <TextInput1
                  value={longitude}
                  onChangeText={setLongitude}
                  text="Longitude"
                  textInputWidth="unset"
                  textInputAlignSelf="stretch"
                  textInputBackgroundColor="#f5f5f5"
                  textInputBorderColor="#765ac6"
                  textInputPaddingVertical="unset"
                />
                <TextInput1
                  value={description}
                  onChangeText={setDescription}
                  text="Descrição da empresa"
                  textInputWidth="unset"
                  textInputAlignSelf="stretch"
                  textInputBackgroundColor="#f5f5f5"
                  textInputBorderColor="#765ac6"
                  textInputPaddingVertical="unset"
                />
              </View>
              <Button1
                text="Criar"
                onPress={handleCreateCompany}
                buttonPosition="unset"
                buttonTop="unset"
                buttonLeft="unset"
                buttonWidth="unset"
                buttonAlignSelf="stretch"
                buttonHeight="unset"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CriarEmpresa;
