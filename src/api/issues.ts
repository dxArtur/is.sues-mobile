import api from "./apiClient"


export const getIssues = async () => {
    try {
        const issues = await api.get('/issues')
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