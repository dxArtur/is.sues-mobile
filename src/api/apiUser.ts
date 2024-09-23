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


export const assumeIssue = async (user: UsersDto, issue: Issue) => {

  try {
    const token = await AsyncStorage.getItem('@token');

      const updatedIssues = user.issues
        ? [...user.issues, issue]
        : [issue];


      // Atualizar o usuário com a lista de issues modificada
      const response = await api.put<UsersDto>(`/users/${user.id}`, { ...user, issues: updatedIssues }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
  } catch (error) {
    console.error("Erro ao atualizar a issue:", error.response?.data || error.message);
  }
}
  
export const getMyIssues = async (userId: string) => {
  try {
    const token = await AsyncStorage.getItem('@token');

    // Atualizar a issue
    const response = await api.get<Issue>(`/users/${userId}/assigned-issues`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },

    });
    const myIssues = response.data
    return myIssues
  } catch (error) {
    
  }
}