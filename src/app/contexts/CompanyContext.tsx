import React, { createContext, useState, ReactNode } from 'react';
import api from '@/src/api/apiClient';
import { Alert } from 'react-native';
import { CompanyDto } from '@/src/dtos/CompanyDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Definindo a interface para o contexto
interface CompanyContextData {
  companies: CompanyDto[];
  createCompany: (companyData: CompanyDto) => Promise<void>;
  loadCompanies: () => Promise<void>;
  updateCompany: (companyId: string, updatedData: Partial<CompanyDto>) => Promise<void>;
}

// Criando o contexto
export const CompanyContext = createContext<CompanyContextData>({} as CompanyContextData);

// Criando o provider do contexto
export const CompanyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [companies, setCompanies] = useState<CompanyDto[]>([]);

  // Função para carregar as empresas da API
  const loadCompanies = async () => {
    try {
      const response = await api.get('/company/all');
      setCompanies(response.data); // Carregar as empresas no estado
    } catch (error) {
      console.error('Erro ao carregar empresas:', error);
    }
  };

  // Função para criar uma nova empresa
  const createCompany = async (companyData: CompanyDto) => {
    try {
      const response = await api.post('/company/new', companyData);
      setCompanies([...companies, response.data]); // Adicionar nova empresa ao estado
      console.log(response.data);
      Alert.alert('Sucesso', 'Empresa criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar empresa:', error);
      Alert.alert('Erro', 'Não foi possível criar a empresa.');
    }
  };
  const updateCompany = async (companyId: string, updatedData: Partial<CompanyDto>) => {
    try {
      const token = await AsyncStorage.getItem('@token'); // Recupera o token do AsyncStorage
      if (!token) throw new Error("Token não encontrado");

      const response = await api.put(`/company/${companyId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho da requisição
        },
      });

      //const response = await api.put(`/company/${companyId}`, updatedData);
      const updatedCompanies = companies.map((company) =>
        company.id === companyId ? { ...company, ...response.data } : company
      );
      setCompanies(updatedCompanies);
    } catch (error) {
      console.error('Erro ao atualizar empresa:', error);
      Alert.alert('Erro', 'Não foi possível atualizar a empresa.');
    }
  };

  return (
    <CompanyContext.Provider value={{ companies, createCompany, loadCompanies, updateCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};
