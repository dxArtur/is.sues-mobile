import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { getIssues, updateIssue, createIssues, getAuthorIssue } from '@/src/api/issues';
import { Issue } from '@/src/dtos/IssueDTO';
import { useAuth } from '@/src/app/hooks/useAuth';
import { getMyIssues } from '@/src/api/apiUser';

type IssuesContextData = {
  issues: Issue[];
  myIssues: Issue[];
  loadIssues: () => Promise<void>;
  loadMyIssues: () => Promise<void>;
  createNewIssue: (issueData: Partial<Issue>) => Promise<void>;
  updateExistingIssue: (issueData: Issue) => Promise<void>;
  getAuthorName: (authorId: string) => Promise<string>;
};

export const IssuesContext = createContext<IssuesContextData | undefined>(undefined);

type IssuesProviderProps = {
  children: ReactNode;
};

export const IssuesProvider: React.FC<IssuesProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [issues, setIssues] = useState<Issue[]>([]);
  const [myIssues, setMyIssues] = useState<Issue[]>([]);

  // Carrega todas as issues
  const loadIssues = async () => {
    try {
      const allIssues = await getIssues();
      setIssues(allIssues);
    } catch (error) {
      console.error('Erro ao carregar issues:', error);
    }
  };

  // Carrega as issues do usuário
  const loadMyIssues = async () => {
    try {
      if (user?.id) {
        const myIssuesResponse = await getMyIssues(user.id);
        
        // Verifica se myIssuesResponse é uma matriz
        if (Array.isArray(myIssuesResponse)) {
          setMyIssues(myIssuesResponse.filter((issue: Issue) => issue !== undefined) as Issue[]);
        } else {
          // Se não for uma matriz, define como uma matriz vazia
          setMyIssues([]);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar minhas issues:', error);
    }
  };
  

  // Cria uma nova issue
  const createNewIssue = async (issueData: Partial<Issue>) => {
    try {
      await createIssues(issueData);  // Agora a função createIssues aceita issueData como argumento
      await loadIssues(); // Atualiza a lista de issues após criar uma nova
    } catch (error) {
      console.error('Erro ao criar issue:', error);
    }
  };

  // Atualiza uma issue existente
  const updateExistingIssue = async (issueData: Issue) => {
    try {
      await updateIssue(issueData);
      await loadIssues(); // Atualiza a lista de issues após a atualização
    } catch (error) {
      console.error('Erro ao atualizar a issue:', error);
    }
  };

  // Obtém o nome do autor de uma issue
  const getAuthorName = async (authorId: string) => {
    try {
      return await getAuthorIssue(authorId);
    } catch (error) {
      console.error('Erro ao buscar o autor da issue:', error);
      throw error;
    }
  };

  useEffect(() => {
    loadIssues();
    loadMyIssues();
  }, []);

  return (
    <IssuesContext.Provider
      value={{
        issues,
        myIssues,
        loadIssues,
        loadMyIssues,
        createNewIssue,
        updateExistingIssue,
        getAuthorName,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

// Hook customizado para acessar o contexto de Issues
export const useIssues = () => {
  const context = useContext(IssuesContext);
  if (!context) {
    throw new Error('useIssues deve ser usado dentro de um IssuesProvider');
  }
  return context;
};
