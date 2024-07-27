import { ImageBackground, Pressable, Text, View, StyleSheet } from "react-native";
import AuthButton from "../components/AuthButtons";
import TextInput from "../components/TextInput"
import Icon from "../components/Icon";

export default function Index() {
  return (
    
      <ImageBackground
          source={require('../../assets/images/bg1.png')} // Ajuste o caminho conforme necessário
          className="flex-1"
      >
          <View className="flex-1 justify-end items-start">
              <View className="w-full h-4/5 gap-2 items-center bg-gray-800 opacity-90 rounded-t-lg p-4 text-left">
                  <View className="w-full justify-start">
                      <AuthButton twStyleButton="" twStylePlaceholder="text-white" title="<-" link="/" />
                  </View>
                  <Text className="drop-shadow-lg px-1 text-3xl font-semibold bg-blue-800 text-white">Bem vindo de volta</Text>
                  <View className="w-full justify-start ">
                      <Text className="pl-10 drop-shadow-lg  font-semibold text-white drop-shadow-lg">Email</Text>
                  </View>
                  <TextInput
                      twStyleButton={"text-white"}
                      placeholder="digite seu email" />
                  <View className="w-full justify-start ">
                      <Text className="pl-10 drop-shadow-lg  font-semibold text-white">Senha</Text>
                  </View>
                  <TextInput
                      twStyleButton={"text-white"}
                      placeholder="digite sua senha" />
                  <View className="w-5/6  mt-2">
                      <AuthButton twStylePlaceholder="text-white text-center" twStyleButton="border border-white bg-blue-800 opacity-100 shadow-lg shadow-black" title="Login" link="/index" />
                  </View>
              </View>

          </View>
      </ImageBackground>
  )
}
