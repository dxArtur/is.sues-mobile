import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Alert, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@/src/app/hooks/useAuth';
import { useCompany } from '@/src/app/hooks/useCompany';
import { useDepartment } from '@/src/app/hooks/useDepartment';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para pegar o companyId
import { FontAwesome5, AntDesign, Fontisto } from '@expo/vector-icons'; // Ícone de edição
import { CompanyDto } from '@/src/dtos/CompanyDTO';
import styles from './styles';

const ProfileScreen: React.FC = () => {
  const { user } = useAuth();
  const { companies, loadCompanies } = useCompany();
  const { departments, loadDepartments, getDepartmentById } = useDepartment();
  const [company, setCompany] = useState<CompanyDto | null>(null);
  const [departmentName, setDepartmentName] = useState<string>('Carregando...');
  const [companyId, setCompanyId] = useState<string | null>(null);
  const [isHead, setIsHead] = useState(false); // Define se o usuário é o líder da empresa
  const navigation = useNavigation();
  
  const fetchCompanyData = async () => {
    try {
      const storedCompanyId = await AsyncStorage.getItem('@companyId');
      const storedUser = await AsyncStorage.getItem('@user');
      const user = storedUser ? JSON.parse(storedUser) : null;

      let companyId = storedCompanyId;

      // Caso não tenha companyId no AsyncStorage, busca pelo departmentId
      if (!companyId && user?.departmentId) {
        const department = await getDepartmentById(user.departmentId);
        if (department) {
          companyId = department.companyId;
        }
      }

      if (companyId) {
        setCompanyId(companyId);

        // Carrega as empresas se ainda não estiverem carregadas
        if (companies.length === 0) {
          await loadCompanies();
        }

        // Busca a empresa pelo companyId
        const foundCompany = companies.find(c => c.id === companyId);
        if (foundCompany) {
          setCompany(foundCompany);

          // Verifica se o usuário logado é o líder da empresa (headId)
          if (foundCompany.headid === user?.id) {
            setIsHead(true);
          }
        }
      } else {
        Alert.alert('Erro', 'Não foi possível carregar os dados da empresa.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao buscar os dados da empresa.');
      console.error(error);
    }
  };
  const handleEditPhoto = () => {
    navigation.navigate('UpdateProfilePictureScreen');
  }; 

  const fetchDepartmentName = async (departmentId: string) => {
    try {
      const name = await getDepartmentById(departmentId);
      setDepartmentName(name ? name.name : 'Não encontrado');
    } catch (error) {
      setDepartmentName('Erro ao carregar');
      console.error('Erro ao carregar o nome do departamento:', error);
    }
  };

  useEffect(() => {
    fetchCompanyData();
    loadDepartments();
  }, [companies]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header Profile integrado diretamente */}
        <View style={styles.headerContainer}>
          <Image
            source={{ uri: user?.photo || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }}
            style={styles.photo}
          />
          <View style={styles.textContainer}>
            <Text style={styles.occupation}>{`${user?.occupation},`}</Text>
            <Text style={styles.userName}>{user?.name}</Text>
          </View>
          <Pressable onPress={handleEditPhoto}>
            <FontAwesome5 name="edit" size={24} color="black" />
          </Pressable>
        </View>

        {/* Informações do Perfil */}
        <View style={styles.section}>
          <Text style={styles.label}><AntDesign name="user" size={24} color="black" />Nome:</Text>
          <Text style={styles.value}>{user?.name}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}><Fontisto name="email" size={24} color="black" /> E-mail:</Text>
          <Text style={styles.value}>{user?.email}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}><FontAwesome5 name="address-card" size={24} color="black" /> Cargo:</Text>
          <Text style={styles.value}>{user?.occupation}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}><FontAwesome5 name="building" size={24} color="black" /> {isHead ? 'Líder da Empresa:' : 'Departamento:'}</Text>
          <Text style={styles.value}>
            {isHead ? company?.name : departmentName}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
