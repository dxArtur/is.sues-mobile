import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, Image } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { useDepartment } from "@/src/app/hooks/useDepartment";
import { useCompany } from "@/src/app/hooks/useCompany";
import { DepartmentDto } from "@/src/dtos/DepartmentDTO";
import { UsersDto } from "@/src/dtos/UserDTO";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { Color } from "@/GlobalStyles";
import LoadingIndicator from "@/src/components/company/LoadingIndicator";
import Modal2 from "@/src/components/company/Modal2";

type DepartmentDetailsRouteProp = RouteProp<ReactNavigation.RootParamList, 'DepartmentDetails'>;

const DepartmentDetailsScreen = () => {
  const { getDepartmentById } = useDepartment();
  const { companies } = useCompany();
  const route = useRoute<DepartmentDetailsRouteProp>();
  const { departmentId } = route.params;
  const navigation = useNavigation();

  const [department, setDepartment] = useState<DepartmentDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState<UsersDto[]>([]);

  useEffect(() => {
    const loadDepartmentData = async () => {
      try {
        const departmentData = await getDepartmentById(departmentId);
        if (departmentData) {
          setDepartment(departmentData);
          setEmployees(departmentData.users || []); // Assuming `departmentData.users` contains the list of employees
        }
      } catch (error) {
        console.error("Erro ao carregar os dados do departamento:", error);
      } finally {
        setLoading(false);
      }
    };
    loadDepartmentData();
  }, [departmentId]);

  if (loading) {
    return <LoadingIndicator message="Carregando dados do departamento..." />;
  }

  if (!department) {
    return <Text>Departamento não encontrado.</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
      <Modal2
          jobDetails="Ver Departamentos"
          component1={require("@/src/assets/images/component-11.png")}
          component1IconLeft={93}
        />
        <Text style={styles.departmentName}>{department.name}</Text>
        <Text style={styles.sectionTitle}>Funcionários</Text>
        
        {employees.length === 0 ? (
          <Text style={styles.noEmployeesText}>Nenhum funcionário cadastrado.</Text>
        ) : (
          employees.map((employee) => (
            <View key={employee.id} style={styles.employeeContainer}>
              <Image
                source={{ uri: employee.photo || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }}
                style={styles.employeePhoto}
              />
              <View style={styles.employeeDetails}>
                <Text style={styles.employeeName}>{employee.name}</Text>
                <Text style={styles.employeeEmail}>{employee.email}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DepartmentDetailsScreen;
