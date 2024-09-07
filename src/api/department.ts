import api from "./apiClient"
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getDepartmentName = async (departmentId:string): Promise<string> =>{
    try {
        const token = await AsyncStorage.getItem('@token');
        const response = await api.get(`/departments/${departmentId}`,
        {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        }
    )
    const departmentName = response.data.name
    return departmentName
} catch (error) {
    throw error
}
}