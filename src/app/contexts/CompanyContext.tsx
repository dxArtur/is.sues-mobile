import React, { createContext, useState, ReactNode } from 'react';
import api from '@/src/api/apiClient';
import { Alert } from 'react-native';
import { CompanyDto } from '@/src/dtos/CompanyDTO';

// Definindo a interface para o contexto
interface CompanyContextData {
  companies: CompanyDto[];
  createCompany: (companyData: CompanyDto) => Promise<void>;
  loadCompanies: () => Promise<void>;
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
      Alert.alert('Sucesso', 'Empresa criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar empresa:', error);
      Alert.alert('Erro', 'Não foi possível criar a empresa.');
    }
  };

  return (
    <CompanyContext.Provider value={{ companies, createCompany, loadCompanies }}>
      {children}
    </CompanyContext.Provider>
  );
};
