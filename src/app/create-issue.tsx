/*import { useState } from "react";
import { ImageBackground, Text, View, Alert } from "react-native";
import AuthButton from "../components/auth/AuthButtons";
import TextInput from "../components/common/TextInput";
import { useAuth } from "./hooks/useAuth";
import { CreateIssue, IssueData } from '../api/apiService'; 

export default function CreateIssueScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const { user } = useAuth();

  async function handleCreateIssue() {
    if (!user || !user.id) { 
      Alert.alert("Erro", "Usuário não autenticado.");
      return;
    }
    try {
      const issueData: IssueData = {
        title,
        description,
        departmentId,
        authorId: user.id,
      };

      const response = await CreateIssue(issueData);

      Alert.alert("Sucesso", "Issue criada com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível criar a issue.");
      console.error(error);
    }
  }

  return (
    <ImageBackground
      source={require("../assets/images/bg1.png")}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start" }}>
        <View
          style={{
            width: "100%",
            height: "80%",
            gap: 8,
            alignItems: "center",
            backgroundColor: "rgba(128,128,128,0.9)",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            padding: 16,
          }}
        >
          <View style={{ width: "100%", justifyContent: "flex-start" }}>
            <AuthButton twStyleButton="" twStylePlaceholder="text-white" title="<-" link="/" />
          </View>
          <Text style={{ paddingLeft: 4, fontSize: 24, fontWeight: "bold", backgroundColor: "#1E3A8A", color: "white" }}>
            Criar Issue
          </Text>

          <TextInput
            twStyleButton="text-white"
            placeholder="Título"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            twStyleButton="text-white"
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            twStyleButton="text-white"
            placeholder="ID do Departamento"
            value={departmentId}
            onChangeText={setDepartmentId}
          />

          <View style={{ width: "83%", marginTop: 8 }}>
            <AuthButton
              twStylePlaceholder="text-white text-center"
              twStyleButton="border border-white bg-blue-800 opacity-100 shadow-lg shadow-black"
              title="Criar"
              onPress={handleCreateIssue}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}*/
