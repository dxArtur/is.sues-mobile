import React, { useState, useEffect } from 'react';
import { View, Alert, Text } from 'react-native';
import { useRoute, RouteProp, useNavigation, CommonActions } from '@react-navigation/native';
import { Image } from 'expo-image';
import * as Location from 'expo-location'; // Importando expo-location para pegar a localização atual
import MapView, { Marker } from 'react-native-maps'; // Importando MapView e Marker
import TextInput1 from "@/src/components/company/TextInput1";
import Modal2 from '@/src/components/company/Modal2';
import Button1 from "@/src/components/company/Button1";
import { useCompany } from '@/src/app/hooks/useCompany';
import styles from "./styles";
import { CompanyDto } from '@/src/dtos/CompanyDTO';

type CriarEmpresaRouteProp = RouteProp<ReactNavigation.RootParamList, 'CriarEmpresa'>;

const CriarEmpresa = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const route = useRoute<CriarEmpresaRouteProp>();
  const { headid } = route.params;

  const { createCompany } = useCompany(); 
  const navigation = useNavigation(); // Hook de navegação

  // Obtém a localização atual do dispositivo
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Permita o acesso à localização para usar este recurso.');
        return;
      }
      
      const location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setMapRegion({
        ...mapRegion,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  // Função para criar a empresa
  const handleCreateCompany = async () => {
    if (!location) {
      Alert.alert('Erro', 'A localização da empresa é necessária.');
      return;
    }

    // Cria o objeto CompanyDto com os dados da empresa e o headid
    const companyData: CompanyDto = {
      name,
      email,
      password,
      headid: headid, // Adiciona o headid ao objeto da empresa
      latitude: location.latitude,
      longitude: location.longitude,
      ...(description ? { description } : {}),
    };

    try {
      await createCompany(companyData);
      Alert.alert('Sucesso', 'Empresa criada com sucesso!');
      // Limpa o histórico de navegação e redireciona para a tela de Welcome
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Welcome' }],
        })
      );
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao criar a empresa');
      console.error(error);
    }
  };

  return (
    <View style={styles.criarEmpresa}>
      <View style={[styles.modal, styles.modalFlexBox]}>
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
          <View style={styles.form}>
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
              value={description}
              onChangeText={setDescription}
              text="Descrição da empresa"
              textInputWidth="unset"
              textInputAlignSelf="stretch"
              textInputBackgroundColor="#f5f5f5"
              textInputBorderColor="#765ac6"
              textInputPaddingVertical="unset"
            />

            {/* Mapa com o marcador */}
            {location && (
              <MapView
                style={styles.map}
                region={mapRegion}
                onRegionChangeComplete={region => setMapRegion(region)}
              >
                <Marker
                  draggable
                  coordinate={mapRegion}
                  onDragEnd={(e) =>
                    setLocation(e.nativeEvent.coordinate)
                  }
                />
              </MapView>
            )}

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
  );
};

export default CriarEmpresa;
