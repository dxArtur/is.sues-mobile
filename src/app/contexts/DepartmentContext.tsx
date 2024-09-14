import React, { createContext, useState, ReactNode } from 'react';
import api from '@/src/api/apiClient';
import { DepartmentDto } from '@/src/dtos/DepartmentDTO';
import { Alert } from 'react-native';

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
      const response = await api.get('/departments/all');
      setDepartments(response.data);
    } catch (error) {
      console.error('Erro ao carregar departamentos:', error);
    }
  };

  // Criar um novo departamento
  const createDepartment = async (departmentData: DepartmentDto) => {
    try {
      const response = await api.post('/departments/new', departmentData);
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
      const response = await api.get(`/departments/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar o departamento de ID ${id}:`, error);
      return undefined;
    }
  };

  // Atualizar um departamento
  const updateDepartment = async (id: string, updatedData: Partial<DepartmentDto>) => {
    try {
      await api.put(`/departments/${id}`, updatedData);
      Alert.alert('Sucesso', 'Departamento atualizado com sucesso!');
      await loadDepartments(); // Recarregar a lista de departamentos após a atualização
    } catch (error) {
      console.error('Erro ao atualizar o departamento:', error);
      Alert.alert('Erro', 'Não foi possível atualizar o departamento.');
    }
  };

  // Deletar um departamento
  const deleteDepartment = async (id: string) => {
    try {
      await api.delete(`/departments/${id}`);
      setDepartments(departments.filter(dept => dept.id !== id));
      Alert.alert('Sucesso', 'Departamento deletado com sucesso!');
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
