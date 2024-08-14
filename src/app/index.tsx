import { ImageBackground, Pressable, Text, View, StyleSheet } from "react-native";
import AuthButton from "../components/AuthButtons";

export default function Index() {
  return (
    
      <ImageBackground
        source={require('../assets/images/bg1.png')} // Ajuste o caminho conforme necessário
        className="flex-1"
      >
      <View className="flex-1 justify-end items-start">
        <Text className="pl-4 text-white font-bold text-4xl">Is.sues</Text>
        <Text className="pl-5 italic text-gray-500 text-base">@Is.sues</Text>
        <View className="flex items-center h-32 opacity-80 w-full justify-around rounded-t-3xl flex-row space-beetwen bg-white">
          <AuthButton title={"Sign in"} link={"/signin"}
          twStyleButton="border bg-gray-500  border-white shadow-lg shadow-gray-400"
          twStylePlaceholder="text-white"
          />
          <AuthButton title={"Sign up"} link={"/signup"} 
          twStyleButton={"border border-blue-500 shadow-lg shadow-blue-500/50"}
          twStylePlaceholder={"text-blue-500 shadow-lg"}
          />
        </View>
      </View>
      </ImageBackground>
  )
}


