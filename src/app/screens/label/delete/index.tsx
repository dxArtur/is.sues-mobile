import React, { useState, useEffect } from "react";
import { Text, View, Alert, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLabel } from "@/src/app/hooks/useLabel"; // Hook para labels
import { useDepartment } from "@/src/app/hooks/useDepartment"; // Hook de departamentos
import Button1 from "@/src/components/company/Button1";
import Modal2 from "@/src/components/company/Modal2";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Para pegar o companyId
import styles from "./styles";

const DeletarLabel = () => {
  const [companyId, setCompanyId] = useState<string | null>(null);

  const { labels, loadLabels, deleteLabel } = useLabel();
  const { departments, loadDepartments } = useDepartment(); // Carrega os departamentos
  const navigation = useNavigation();

  // Carrega o companyId, labels e departamentos ao iniciar a screen
  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const storedCompanyId = await AsyncStorage.getItem('@companyId');
        if (storedCompanyId) {
          setCompanyId(storedCompanyId);
          await loadLabels(); // Carrega todas as labels
          await loadDepartments(); // Carrega todos os departamentos
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

  // Filtra as labels que pertencem aos departamentos da empresa do headId
  const filteredLabels = labels.filter((label) => {
    const department = departments.find(dep => dep.id === label.departmentId);
    return department && department.companyId === companyId;
  });

  // Função para deletar a label
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

        {/* Lista de Labels */}
        <FlatList
          data={filteredLabels} // Exibe apenas as labels da empresa do headId
          keyExtractor={(item) => item.id!.toString()}
          renderItem={({ item }) => {
            // Encontrar o departamento ao qual a label pertence
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
