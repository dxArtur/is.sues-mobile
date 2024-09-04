import React, { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import api from '../../api/apiClient';
import { UsersDto } from '../../dtos/UserDTO';

interface AuthContextData {
  tokenState: string | null;
  user: UsersDto | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, occupation: string, email: string, password: string, adm: boolean) => Promise<void>;
  signOut: () => void;
}

//export const AuthContext = createContext<AuthContextData | undefined>(undefined);
export const AuthContext = createContext({} as AuthContextData);


interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthProviderContext = ({ children }: AuthProviderProps) => {
  const [tokenState, setTokenState] = useState<string | null>(null);
  const [user, setUser] = useState<UsersDto | null>(null);
  const isAuthenticated = !!user;
  const router = useRouter();

  useEffect(() => {
    async function loadStoredUser() {
      const storedUser = await AsyncStorage.getItem('@user');
      const token = await AsyncStorage.getItem('@token');
      
      if (storedUser && token) {
        setUser(JSON.parse(storedUser));
      }
    }
    loadStoredUser();
  }, []);

  async function signIn(email: string, password: string) {
    const dados = {
      email, password
    }
    try {
      const response = await api.post('/signin', dados);
      const { token, userAttempAuth } = response.data;
      const userData: UsersDto = userAttempAuth;

      await AsyncStorage.setItem('@user', JSON.stringify(userData));
      await AsyncStorage.setItem('@token', token);
      setTokenState(token);
      setUser(userData);
      router.push('/screens/home');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao fazer login:', error.message);
        throw new Error('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
      } else {
        console.error('Erro desconhecido ao fazer login:', error);
        throw new Error('Erro desconhecido ao fazer login. Tente novamente mais tarde.');
      }
    }
  }

  async function signUp(name: string, occupation: string, email: string, password: string, isAdmin: boolean) {
    try {
      const response = await api.post('/users', {
        name,
        occupation,
        email,
        password,
        adm: isAdmin,
      });

      if (response.status !== 200) {
        console.log("Response status:", response.status);
        console.log("Response data:", response.data);
        throw new Error('Erro ao se registrar. Tente novamente.');
      }

      router.push('/screens/signin');
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

  function signOut() {
    AsyncStorage.removeItem('@token');
    AsyncStorage.removeItem('@user');
    setTokenState(null);
    setUser(null);
    router.push('/screens/signin');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated,tokenState, signIn, signUp, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};
