import AsyncStorage from "@react-native-async-storage/async-storage";
import { UsersDto } from "../dtos/UserDTO";
import { Issue } from "../dtos/IssueDTO";
import api from "./apiClient";

export const verifyAdmin = async () => {
    try {
        const userString = await AsyncStorage.getItem('@user');
        if (userString) {
          const user: UsersDto = JSON.parse(userString);
          return user.adm; // Assume que `adm` é um booleano indicando se o usuário é admin
        }
    } catch (error) {
      console.error('Erro ao obter usuario:', error);
      throw error;
    }
  }


export const assumeIssue = async (user: UsersDto, issue:Issue, updateData:Partial<Issue>) => {

  try {
    const token = await AsyncStorage.getItem('@token');

    // Atualizar a issue
    const issueUpdateResponse = await api.put<Issue>(`/issues/${issue.id}`, updateData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (issueUpdateResponse.status === 200) {
      // Se a atualização for bem-sucedida, adicionar a issue à lista de issues do usuário
      const userResponse = await api.get<UsersDto>(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (userResponse.status === 200) {
        const user: UsersDto = userResponse.data;

        // Adicionar a issue à lista de issues do usuário se não estiver presente
        const updatedIssues = user.issues ? [...user.issues, issue] : [issue];

        // Atualizar o usuário com a lista de issues modificada
        const response = await api.put<UsersDto>(`/users/${user.id}`, { ...user, issues: updatedIssues }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const userUpdate = response.data
        return userUpdate
      }
    }
  } catch (error) {
    
  }
}
  
