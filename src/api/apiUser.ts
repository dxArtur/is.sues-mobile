import AsyncStorage from "@react-native-async-storage/async-storage";
import { UsersDto } from "../dtos/UserDTO";

const verifyAdmin = async () => {
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
  
  export default verifyAdmin