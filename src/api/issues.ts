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


export const createIssues = async () => {
    try {

    } catch (error) {
        
    }
}