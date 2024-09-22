import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/apiClient';
import { UsersDto } from '../../dtos/UserDTO';

interface AuthContextData {
  tokenState: string | null;
  user: UsersDto | null;
  isAuthenticated: boolean;
  companyId: string | null;
  signIn: (email: string, password: string) => Promise<{ userData: UsersDto, companyId: string | null }>;
  signUp: (name: string, occupation: string, email: string, password: string, adm: boolean, departmentId: string | null) => Promise<UsersDto | void>; 
  signOut: () => void;
  updateUser: (id: string, name: string, occupation: string, email: string, departmentId: string) => Promise<void>; 
  getEmployeeById: (id: string) => Promise<UsersDto | null>;
  deleteEmployee: (id: string) => Promise<void>;
}


export const AuthContext = createContext<AuthContextData | undefined>(undefined);
//export const AuthContext = createContext({} as AuthContextData);


interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthProviderContext = ({ children }: AuthProviderProps) => {
//export function AuthProviderContext({ children }: AuthProviderProps) {
  const [tokenState, setTokenState] = useState<string | null>(null);
  const [user, setUser] = useState<UsersDto | null>(null);
  const [companyId, setCompanyId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!user;

  useEffect(() => {
    async function loadStoredUser() {
      const storedUser = await AsyncStorage.getItem('@user');
      const token = await AsyncStorage.getItem('@token');
      const storedCompanyId = await AsyncStorage.getItem('@companyId');
      
      if (storedUser && token) {
        setUser(JSON.parse(storedUser));
        setTokenState(token);
        setCompanyId(storedCompanyId);
      }
      setLoading(false)
    }
    loadStoredUser();
  }, []);

  async function signIn(email: string, password: string): Promise<{ userData: UsersDto, companyId: string | null }> {
    const dados = {
      email, 
      password
    };
  
    try {
      // Tenta fazer a autenticação do usuário
      const response = await api.post('/signin', dados);
      const { token, userAttempAuth } = response.data;
      const userData: UsersDto = userAttempAuth;
  
      // Tentativa de buscar o companyId para o headid do usuário
      let companyId = null;
      try {
        const companyResponse = await api.get(`/company/head/${userData.id}`);
        companyId = companyResponse.data?.id || null;
      } catch (companyError) {
        console.error('Erro ao buscar a empresa do usuário:', companyError);
      }
  
      // Armazenando dados do usuário e tokens localmente
      await AsyncStorage.setItem('@user', JSON.stringify(userData));
      await AsyncStorage.setItem('@token', token);
  
      // Se o usuário tem uma empresa, armazena o companyId
      if (companyId) {
        await AsyncStorage.setItem('@companyId', companyId);
        setCompanyId(companyId);
      }
  
      // Define o estado do token e do usuário
      setTokenState(token);
      setUser(userData);
      return { userData, companyId };
    } catch (error: any) {
      // Tratamento do erro de autenticação
      if (error.response && error.response.status === 404) {
        console.error('Erro 404: Endpoint não encontrado ou recurso não existe');
      } else if (error instanceof Error) {
        console.error('Erro ao fazer login:', error.message);
        throw new Error('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
      } else {
        console.error('Erro desconhecido ao fazer login:', error);
        throw new Error('Erro desconhecido ao fazer login. Tente novamente mais tarde.');
      }
    }
    return { userData: {} as UsersDto, companyId: null };
  }  

  async function signUp(name: string, occupation: string, email: string, password: string, isAdmin: boolean, departmentId: string | null) {
    try {
      const response = await api.post('/users', {
        name,
        occupation,
        email,
        password,
        adm: isAdmin,
        departmentId,
      });

      if (response.status === 200) {
        const createdUser: UsersDto = response.data; // Captura o usuário criado
        return createdUser; // Retorna o usuário para uso posterior
      } else {
        console.log("Response status:", response.status);
        console.log("Response data:", response.data);
        throw new Error('Erro ao se registrar. Tente novamente.');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao se registrar:', error.message);
        throw new Error('Erro ao fazer registro. Tente novamente.');
      } else {
        console.error('Erro desconhecido ao fazer registro:', error);
        throw new Error('Erro desconhecido ao fazer registro. Tente novamente mais tarde.');
      }
    }
  }

  const updateUser = async (id: string, name: string, occupation: string, email: string, departmentId: string) => {
    try {
      // Envia a atualização para a API
      await api.put(`/users/${id}`, {
        name,
        occupation,
        email,
        departmentId,
      });

  
    } catch (error: any) {
      console.error("Erro ao atualizar o funcionário:", error.response ? error.response.data : error.message);
      throw new Error('Ocorreu um erro ao atualizar o funcionário. Tente novamente.');
    }
  };
  const getEmployeeById = async (id: string): Promise<UsersDto | null> => {
    try {
      const response = await api.get(`/users/${id}`);
      if (response.status === 200) {
        return response.data as UsersDto;
      }
      return null;
    } catch (error) {
      console.error(`Erro ao buscar o funcionário com ID ${id}:`, error);
      return null;
    }
  };

  const deleteEmployee = async (id: string): Promise<void> => {
    try {
      await api.delete(`/users/${id}`); // Chamada para deletar o funcionário pela API
    } catch (error: any) {
      console.error(`Erro ao deletar o funcionário com ID ${id}:`, error.response ? error.response.data : error.message);
      throw new Error('Erro ao deletar o funcionário. Tente novamente.');
    }
  };

  function signOut() {
    AsyncStorage.removeItem('@token');
    AsyncStorage.removeItem('@user');
    AsyncStorage.removeItem('@companyId')
    setTokenState(null);
    setUser(null);
    setCompanyId(null);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, tokenState, companyId, signIn, signUp, signOut, updateUser, getEmployeeById, deleteEmployee }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
