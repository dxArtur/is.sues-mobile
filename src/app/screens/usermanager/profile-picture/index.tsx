import React, { useState } from 'react';
import { View, Text, Image, Alert, Pressable, SafeAreaView } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '@/src/app/hooks/useAuth';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles'; 
import Modal2 from '@/src/components/company/Modal2';

const UpdateProfilePictureScreen: React.FC = () => {
  const { user, updateProfilePicture } = useAuth();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigation = useNavigation();

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permissão necessária', 'Você precisa permitir o acesso às suas imagens.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri ?? ''; 
      setSelectedImage(uri);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      Alert.alert('Erro', 'Nenhuma imagem foi selecionada.');
      return;
    }
    if (user && user.id) {
      await updateProfilePicture(user.id, selectedImage);
      Alert.alert("Sucesso", "Foto de perfil atualizada com sucesso!");
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Profile' }],
        })
      );

    } else {
      Alert.alert('Erro', 'Usuário não encontrado.');
    }
  };
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Modal2
          jobDetails="Alterar foto"
          component1={require("@/src/assets/images/component-11.png")}
          component1IconLeft={93}
        />
      <Text style={styles.title}>Atualizar Foto do Perfil</Text>

      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
      ) : (
        <Text>Nenhuma imagem selecionada</Text>
      )}

      <Pressable onPress={pickImage} style={styles.button}>
        <FontAwesome5 name="image" size={24} color="white" />
        <Text style={styles.buttonText}>Selecionar Imagem</Text>
      </Pressable>

      <Pressable onPress={handleUpload} style={styles.buttonUpload}>
        <FontAwesome5 name="upload" size={24} color="white" />
        <Text style={styles.buttonText}>Atualizar Imagem</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
};

export default UpdateProfilePictureScreen;
