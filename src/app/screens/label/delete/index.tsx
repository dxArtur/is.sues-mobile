import React, { useState, useEffect } from "react";
import { Text, View, Alert, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLabel } from "@/src/app/hooks/useLabel";
import { useDepartment } from "@/src/app/hooks/useDepartment";
import Button1 from "@/src/components/company/Button1";
import Modal2 from "@/src/components/company/Modal2";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import styles from "./styles";

const DeletarLabel = () => {
  const [companyId, setCompanyId] = useState<string | null>(null);

  const { labels, loadLabels, deleteLabel } = useLabel();
  const { departments, loadDepartments } = useDepartment(); 
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const storedCompanyId = await AsyncStorage.getItem('@companyId');
        if (storedCompanyId) {
          setCompanyId(storedCompanyId);
          await loadLabels();
          await loadDepartments();
        } else {
          Alert.alert('Erro', 'ID da empresa não encontrado.');
        }
      } catch (error) {
        Alert.alert('Erro', 'Ocorreu um erro ao carregar os dados.');
        console.error(error);
      }
    };

    fetchCompanyData();
  }, []);

  const filteredLabels = labels.filter((label) => {
    const department = departments.find(dep => dep.id === label.departmentId);
    return department && department.companyId === companyId;
  });

  const handleDeleteLabel = async (labelId: number) => {
    Alert.alert(
      'Confirmação',
      'Tem certeza que deseja deletar essa label?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Deletar',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteLabel(labelId);
              Alert.alert('Sucesso', 'Label deletada com sucesso!');
            } catch (error) {
              console.error(error);
              Alert.alert('Erro', 'Ocorreu um erro ao deletar a label.');
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.screenContainer}>
        <Modal2
          jobDetails="Editar Label"
          component1={require("@/src/assets/images/component-11.png")}
          component1IconLeft={93}
        />
        <View style={styles.container}>
        <Text style={styles.title}>Selecione uma Label para Deletar</Text>

        <FlatList
          data={filteredLabels}
          keyExtractor={(item) => item.id!.toString()}
          renderItem={({ item }) => {
            const department = departments.find(dep => dep.id === item.departmentId);
            return (
              <View style={styles.labelItem}>
                <View>
                  <Text style={styles.labelText}>{item.name}</Text>
                  {department && (
                    <Text style={styles.departmentText}>{department.name}</Text>
                  )}
                </View>
                <Button1
                  text="Deletar"
                  onPress={() => handleDeleteLabel(item.id!)}
                />
              </View>
            );
          }}
        />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default DeletarLabel;
