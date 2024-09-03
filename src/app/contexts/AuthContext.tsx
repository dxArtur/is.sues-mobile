import React, { createContext, useState, ReactNode, useContext } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { UsersDto } from '../../dtos/UserDTO';
import authenticateUser from '../../api/apiAuth';

type AuthContextData = {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, name: string, occupation: string, password: string, adm: boolean) => Promise<void>;
  signOut: () => void;
  user: UsersDto | null;
};

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UsersDto | null>(null);
  const isAuthenticated = !!user;
  const router = useRouter();

  async function signIn(email: string, password: string) {
    try {
      const response = await axios.post('https://is-sues-omega.vercel.app/api/signin', {
        email,
        password,
      });

      const { token, userAttempAuth } = response.data; // Ajustado aqui -- Israel
      const userData: UsersDto = userAttempAuth; // Ajustado aqui -- Israel

       // Armazena o departmentId apenas se ele existir -- Israel
       if (userData.departmentId) {
        await AsyncStorage.setItem('@department', userData.departmentId);
      }
      await AsyncStorage.setItem('@token', token);

      
      setUser(userData);

      router.push('/home');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao fazer login:', error.message);
        throw new Error('Erro ao fazer login');
      } else {
        console.error('Erro desconhecido ao fazer login:', error);
        throw new Error('Erro desconhecido ao fazer login');
      }
    }
  }


  async function signUp(name: string, occupation: string , email: string, password: string, adm: boolean) {
    console.log(name, email, password, occupation, adm)
    try {
      const response = await axios.post('https://is-sues-omega.vercel.app/api/users', {
        name, occupation, email, password, adm
      })


      if (response.status === 200) {
        router.push('/signin') 
      }
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Erro ao fazer requisição:', error.response?.data || error.message);
      }
      if (error instanceof Error) {
        console.log(error)
        console.error('Erro ao se registrar:', error.name);
        throw new Error('Erro ao fazer registro');
    } else {
        console.error('Erro desconhecido ao fazer registro:', error);
        throw new Error('Erro desconhecido ao fazer registro');
    }
    }
  }

  function signOut() {
    AsyncStorage.removeItem('@token');
    AsyncStorage.removeItem('@department');
    setUser(null);
    router.push('/signin');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signUp, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};