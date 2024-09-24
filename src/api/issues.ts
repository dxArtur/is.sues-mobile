import { Issue } from "../dtos/IssueDTO";
import api from "./apiClient"
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getIssues = async (): Promise<Issue[]> => {
    try {
        const token = await AsyncStorage.getItem('@token');
        const issues = await api.get('/issues', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return issues.data
    } catch (error) {
        throw error
    }
}

export const updateIssue = async (updateData: Issue) =>{
    try {
        const token = await AsyncStorage.getItem('@token');
        const response = await api.put<Issue>(`/issues/${updateData.id}`,  updateData, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            
        })
       const data = response.data
       const status = response.status
        return { status, data}
    } catch (error: any) {
        console.error("Erro ao atualizar a issue:", error.response?.data || error.message);
        throw error
    }
}

export const getAuthorIssue = async (authorId:string): Promise<string> =>{
    try {
    const response = await api.get(`/users/${authorId}`)
    const authorName = response.data.name
    return authorName
} catch (error) {
    throw error
}
}


export const createIssues = async (issue:Issue) => {
    try {
        const token = await AsyncStorage.getItem('@token');
        const response = await api.post('/issues/new', issue, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.error("Erro ao atualizar a issue:", error.response?.data || error.message);
    }
  };
  