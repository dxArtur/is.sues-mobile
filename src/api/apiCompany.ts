import { CompanyDto } from "../dtos/CompanyDTO";
import api from "./apiClient"
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getCompanyName = async (departmentId:string): Promise<string> =>{
    try {
        const token = await AsyncStorage.getItem('@token');
        const response = await api.get(`/company/${departmentId}`,
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

export const getCompany= async (companyId:string): Promise<CompanyDto> =>{
    try {
        const token = await AsyncStorage.getItem('@token');
        const response = await api.get(`/company/${companyId}`,
        {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        }
    )
    const company = response.data
    console.log(company)
    return company
} catch (error) {
    throw error
}
}