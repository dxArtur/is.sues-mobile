import React, { createContext, useState, ReactNode } from 'react';
import api from '@/src/api/apiClient';
import { DepartmentDto } from '@/src/dtos/DepartmentDTO';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface DepartmentContextData {
  departments: DepartmentDto[];
  createDepartment: (departmentData: DepartmentDto) => Promise<void>;
  loadDepartments: () => Promise<void>;
  getDepartmentById: (id: string) => Promise<DepartmentDto | undefined>;
  updateDepartment: (id: string, updatedData: Partial<DepartmentDto>) => Promise<void>;
  deleteDepartment: (id: string) => Promise<void>;
}

export const DepartmentContext = createContext<DepartmentContextData>({} as DepartmentContextData);

export const DepartmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [departments, setDepartments] = useState<DepartmentDto[]>([]);

  // Carregar todos os departamentos
  const loadDepartments = async () => {
    try {
      const token = await AsyncStorage.getItem('@token'); // Recupera o token do AsyncStorage
      if (!token) throw new Error("Token não encontrado");

      const response = await api.get('/departments/all', {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho da requisição
        },
      });
      setDepartments(response.data);
    } catch (error: any) {
      console.error('Erro ao carregar departamentos:', error);
      if (error.response?.status === 401) {
        Alert.alert('Erro de Autenticação', 'Você precisa estar logado para acessar os departamentos.');
      }
    }
  };

  // Criar um novo departamento
  const createDepartment = async (departmentData: DepartmentDto) => {
    try {
      const token = await AsyncStorage.getItem('@token'); // Recupera o token do AsyncStorage
      if (!token) throw new Error("Token não encontrado");

      const response = await api.post('/departments/new', departmentData, {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho da requisição
        },
      });
      setDepartments([...departments, response.data]);
      Alert.alert('Sucesso', 'Departamento criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar departamento:', error);
      Alert.alert('Erro', 'Não foi possível criar o departamento.');
    }
  };
  // Buscar um departamento pelo ID
  const getDepartmentById = async (id: string): Promise<DepartmentDto | undefined> => {
    try {
      const token = await AsyncStorage.getItem('@token'); // Recupera o token do AsyncStorage
      if (!token) throw new Error("Token não encontrado");

      const response = await api.get(`/departments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho da requisição
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar o departamento de ID ${id}:`, error);
      return undefined;
    }
  };

  // Atualizar um departamento
  const updateDepartment = async (id: string, updatedData: Partial<DepartmentDto>) => {
    try {
      const token = await AsyncStorage.getItem('@token'); // Recupera o token do AsyncStorage
      if (!token) throw new Error("Token não encontrado");

      await api.put(`/departments/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho da requisição
        },
      });
      await loadDepartments(); // Recarregar a lista de departamentos após a atualização
    } catch (error) {
      console.error('Erro ao atualizar o departamento:', error);
      Alert.alert('Erro', 'Não foi possível atualizar o departamento.');
    }
  };

  // Deletar um departamento
  const deleteDepartment = async (id: string) => {
    try {
      const token = await AsyncStorage.getItem('@token'); // Recupera o token do AsyncStorage
      if (!token) throw new Error("Token não encontrado");

      await api.delete(`/departments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho da requisição
        },
      });
      setDepartments(departments.filter(dept => dept.id !== id));
    } catch (error) {
      console.error('Erro ao deletar o departamento:', error);
      Alert.alert('Erro', 'Não foi possível deletar o departamento.');
    }
  };

  return (
    <DepartmentContext.Provider value={{ departments, createDepartment, loadDepartments, getDepartmentById, updateDepartment, deleteDepartment }}>
      {children}
    </DepartmentContext.Provider>
  );
};
