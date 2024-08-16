import { useState } from "react";
import { ImageBackground, Text, View, Alert } from "react-native";
import AuthButton from "../components/auth/AuthButtons";
import TextInput from "../components/common/TextInput";
import { useAuth } from "../contexts/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  async function handleLogin() {
    try {
      await signIn(email, password);
      Alert.alert("Sucesso", "Login realizado com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Credenciais inválidas");
      console.log(error);
    }
  }

  return (
    <ImageBackground
      source={require('../assets/images/bg1.png')}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
        <View style={{ width: '100%', height: '80%', gap: 8, alignItems: 'center', backgroundColor: 'rgba(128,128,128,0.9)', borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 16 }}>
          <View style={{ width: '100%', justifyContent: 'flex-start' }}>
            <AuthButton twStyleButton="" twStylePlaceholder="text-white" title="<-" link="/" />
          </View>
          <Text style={{ paddingLeft: 4, fontSize: 24, fontWeight: 'bold', backgroundColor: '#1E3A8A', color: 'white' }}>Bem vindo de volta</Text>
          <View style={{ width: '100%', justifyContent: 'flex-start' }}>
            <Text style={{ paddingLeft: 40, fontWeight: 'bold', color: 'white' }}>Email</Text>
          </View>
          <TextInput
            twStyleButton="text-white"
            placeholder="digite seu email"
            value={email}
            onChangeText={setEmail}
          />
          <View style={{ width: '100%', justifyContent: 'flex-start' }}>
            <Text style={{ paddingLeft: 40, fontWeight: 'bold', color: 'white' }}>Senha</Text>
          </View>
          <TextInput
            twStyleButton="text-white"
            placeholder="digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={{ width: '83%', marginTop: 8 }}>
            <AuthButton twStylePlaceholder="text-white text-center" twStyleButton="border border-white bg-blue-800 opacity-100 shadow-lg shadow-black" title="Login" onPress={handleLogin} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
