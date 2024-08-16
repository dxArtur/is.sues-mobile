import React, { createContext, useState, ReactNode, useContext } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

type AuthContextData = {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  user: any;
};

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;
  const router = useRouter();

  async function signIn(email: string, password: string) {
    try {
      const response = await axios.post('https://is-sues-omega.vercel.app/api/signin', {
        email,
        password,
      });

      const { token, user } = response.data;

      await AsyncStorage.setItem('@token', token);
      setUser(user);

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

  function signOut() {
    AsyncStorage.removeItem('@token');
    setUser(null);
    router.push('/signin');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user }}>
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
