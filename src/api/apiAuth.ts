import AsyncStorage from "@react-native-async-storage/async-storage";

const authenticateUser = async () => {
    try {
        const token = await AsyncStorage.getItem('@token');
    if (token) {
      return `Bearer ${token}`;
    } else {
      throw new Error('Token não encontrado');
    }
  } catch (error) {
    console.error('Erro ao obter token:', error);
    throw error;
  }
}

export default authenticateUser