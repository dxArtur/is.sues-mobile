import { ImageBackground, View, Text } from "react-native";
import AuthButton from "../components/auth/AuthButtons";
import TextInput from "../components/common/TextInput";
import Icon from "../components/common/Icon";

export default function SignUp() {
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

          <Text style={{ paddingLeft: 4, fontSize: 24, fontWeight: 'bold', backgroundColor: '#1E3A8A', color: 'white' }}>Seja bem vindo</Text>
          <View style={{ width: '100%', justifyContent: 'flex-start' }}>
            <Text style={{ paddingLeft: 40, fontWeight: 'bold', color: 'white' }}>Nome</Text>
          </View>
          <TextInput
            twStyleButton="text-white"
            placeholder="digite seu nome"
          />

          <View style={{ width: '100%', justifyContent: 'flex-start' }}>
            <Text style={{ paddingLeft: 40, fontWeight: 'bold', color: 'white' }}>Email</Text>
          </View>
          <TextInput
            twStyleButton="text-white"
            placeholder="digite seu email"
          />

          <View style={{ width: '100%', justifyContent: 'flex-start' }}>
            <Text style={{ paddingLeft: 40, fontWeight: 'bold', color: 'white' }}>Departamento</Text>
          </View>
          <TextInput
            twStyleButton="text-white"
            placeholder="insira o token do departamento"
          />

          <View style={{ width: '100%', justifyContent: 'flex-start' }}>
            <Text style={{ paddingLeft: 40, fontWeight: 'bold', color: 'white' }}>Qual a sua função</Text>
          </View>
          <TextInput
            twStyleButton="text-white"
            placeholder="qual a sua função"
          />

          <View style={{ width: '100%', justifyContent: 'flex-start' }}>
            <Text style={{ color: 'white' }}>É um administrador?</Text>
            <Icon name="checkbox-blank-outline" type="MaterialCommunityIcons" />
          </View>

          <View style={{ width: '83%', marginTop: 8 }}>
            <AuthButton twStylePlaceholder="text-white text-center" twStyleButton="border border-white bg-blue-800 opacity-100 shadow-lg shadow-black" title="Registrar" link="/index" />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
