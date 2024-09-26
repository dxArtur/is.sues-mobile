import React, { useEffect, useState } from 'react';
import { View, Text, Alert, SafeAreaView, ScrollView } from 'react-native';
import { useRoute, RouteProp, useNavigation, CommonActions } from '@react-navigation/native';
import * as Location from 'expo-location';
import { useCompany } from '@/src/app/hooks/useCompany';
import MapView, { Marker } from 'react-native-maps';
import Button1 from '@/src/components/company/Button1';
import Modal2 from '@/src/components/company/Modal2';
import TextInput1 from '@/src/components/company/TextInput1';
import LoadingIndicator from '@/src/components/company/LoadingIndicator';
import styles from './styles';

type EditarEmpresaRouteProp = RouteProp<ReactNavigation.RootParamList, 'EditarEmpresa'>;

const EditarEmpresa = () => {
  const { updateCompany, companies } = useCompany();
  const route = useRoute<EditarEmpresaRouteProp>();
  const { id } = route.params;
  const navigation = useNavigation();

  const [company, setCompany] = useState({
    name: '',
    email: '',
    description: '',
    latitude: 0,
    longitude: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCompanyDetails = () => {
      const companyDetails = companies.find((comp) => comp.id === id);
      if (companyDetails) {
        setCompany({
          name: companyDetails.name,
          email: companyDetails.email,
          description: companyDetails.description || '',
          latitude: companyDetails.latitude || 0,
          longitude: companyDetails.longitude || 0,
        });
      } else {
        Alert.alert('Erro', 'Empresa não encontrada.');
      }
      setLoading(false);
    };

    if (loading) {
      loadCompanyDetails();
    }
  }, [id, companies, loading]);

  useEffect(() => {
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Erro', 'Permissão de localização negada.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setCompany((prevCompany) => ({
        ...prevCompany,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }));
    };

    if (!company.latitude && !company.longitude) {
      requestLocationPermission();
    }
  }, []);

  const handleSaveChanges = async () => {
    if (!company.name || !company.email) {
      Alert.alert('Erro', 'Todos os campos obrigatórios devem ser preenchidos.');
      return;
    }

    try {
      await updateCompany(id, company);
      Alert.alert('Sucesso', 'Empresa atualizada com sucesso!');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'DetalhesDaEmpresa' }],
        })
      );
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao atualizar a empresa');
      console.error(error);
    }
  };

  if (loading) {
    return <LoadingIndicator message="Carregando informações da empresa..." />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <Modal2
          jobDetails="Editar Empresa"
          component1={require("@/src/assets/images/component-11.png")}
          component1IconLeft={93}
        />
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.label}>Nome da empresa</Text>
            <TextInput1
              text=""
              value={company.name}
              onChangeText={(text) => setCompany({ ...company, name: text })}
              textInputWidth="unset"
              textInputAlignSelf="stretch"
              textInputBackgroundColor="#f5f5f5"
              textInputBorderColor="#765ac6"
              textInputPaddingVertical="unset"
            />

            <Text style={styles.label}>Email da empresa</Text>
            <TextInput1
              text=""
              value={company.email}
              onChangeText={(text) => setCompany({ ...company, email: text })}
              textInputWidth="unset"
              textInputAlignSelf="stretch"
              textInputBackgroundColor="#f5f5f5"
              textInputBorderColor="#765ac6"
              textInputPaddingVertical="unset"
            />

            <Text style={styles.label}>Descrição da empresa</Text>
            <TextInput1
              text=""
              value={company.description}
              onChangeText={(text) => setCompany({ ...company, description: text })}
              textInputWidth="unset"
              textInputAlignSelf="stretch"
              textInputBackgroundColor="#f5f5f5"
              textInputBorderColor="#765ac6"
              textInputPaddingVertical="unset"
            />

            <Text style={styles.label}>Localização da Empresa</Text>
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                region={{
                  latitude: company.latitude,
                  longitude: company.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
                onPress={(e) =>
                  setCompany({
                    ...company,
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                  })
                }
              >
                <Marker
                  coordinate={{
                    latitude: company.latitude,
                    longitude: company.longitude,
                  }}
                  draggable
                  onDragEnd={(e) =>
                    setCompany({
                      ...company,
                      latitude: e.nativeEvent.coordinate.latitude,
                      longitude: e.nativeEvent.coordinate.longitude,
                    })
                  }
                />
              </MapView>
            </View>
            <Button1
              text="Salvar Alterações"
              onPress={handleSaveChanges}
              buttonPosition="relative"
              buttonTop={1}
              buttonWidth="90%"
              buttonAlignSelf="center"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditarEmpresa;
