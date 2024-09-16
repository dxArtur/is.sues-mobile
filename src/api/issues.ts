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

export const updateIssue = async (issueId:string, updateData: Partial<Issue>) =>{
    try {

        const token = await AsyncStorage.getItem('@token');
        const response = await api.put<Issue>(`/issues/${issueId}`,  updateData, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            
        })
        const issue: Issue = response.data
        return issue
    } catch (error) {
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


export const createIssues = async () => {
    try {

    } catch (error) {
        
    }
}