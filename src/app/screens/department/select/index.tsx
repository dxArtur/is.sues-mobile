import React, { useState, useEffect } from "react";
import { View, Text, Alert, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDepartment } from "@/src/app/hooks/useDepartment";
import Modal2 from "@/src/components/company/Modal2";
import Button1 from "@/src/components/company/Button1";
import styles from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SelectDepartmentScreen = () => {
  const navigation = useNavigation();
  const { departments, loadDepartments } = useDepartment();
  const [companyId, setCompanyId] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      await loadDepartments();

      const storedCompanyId = await AsyncStorage.getItem('@companyId');
      if (storedCompanyId) {
        setCompanyId(storedCompanyId);
      } else {
        Alert.alert('Erro', 'ID da empresa não encontrado.');
      }
    };

    fetchDepartments();
  }, []);

  const handleViewDepartmentDetails = (departmentId: string) => {
    navigation.navigate('DepartmentDetails', { departmentId });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Modal2
          jobDetails="Ver Departamentos"
          component1={require("@/src/assets/images/component-11.png")}
          component1IconLeft={93}
        />
        
        <Text style={styles.title}>Selecione um Departamento para Ver Detalhes</Text>

        <FlatList
          data={departments.filter(department => department.companyId === companyId)}
          keyExtractor={(item) => item.id!}
          renderItem={({ item }) => (
            <View style={styles.departmentItem}>
              <Text style={styles.departmentText}>{item.name}</Text>
              <Button1
                text="Ver Detalhes"
                onPress={() => handleViewDepartmentDetails(item.id!)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectDepartmentScreen;
