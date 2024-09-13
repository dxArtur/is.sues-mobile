import { CompanyDto } from "../dtos/CompanyDTO";
import api from "./apiClient"
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getCompanyByDep = async (departmentId:string): Promise<CompanyDto> =>{
    try {
        const token = await AsyncStorage.getItem('@token');
        const departament = await api.get(`/departments/${departmentId}`,
        {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        }

    )

    const response = await api.get(`/company/${departament.data.companyId}`,
        {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        }

    )

    const company:CompanyDto = response.data
    return company
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
    return company
} catch (error) {
    throw error
}
}