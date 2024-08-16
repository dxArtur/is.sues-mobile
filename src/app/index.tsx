import { ImageBackground, View, Text } from "react-native";
import AuthButton from "../components/auth/AuthButtons";

export default function Index() {
  return (
    <ImageBackground
      source={require('../assets/images/bg1.png')} 
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
        <Text style={{ paddingLeft: 16, color: 'white', fontWeight: 'bold', fontSize: 32 }}>Is.sues</Text>
        <Text style={{ paddingLeft: 20, fontStyle: 'italic', color: '#B0B0B0', fontSize: 14 }}>@Is.sues</Text>
        <View style={{ flexDirection: 'row', height: 128, opacity: 0.8, width: '100%', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
          <AuthButton 
            title="Sign in" 
            link="/signin"
            twStyleButton="border bg-gray-500 border-white shadow-lg shadow-gray-400"
            twStylePlaceholder="text-white"
          />
          <AuthButton 
            title="Sign up" 
            link="/signup"
            twStyleButton="border border-blue-500 shadow-lg shadow-blue-500/50"
            twStylePlaceholder="text-blue-500 shadow-lg"
          />
          <AuthButton 
            title="Create Issue" 
            link="/create-issue"
            twStyleButton="border border-green-500 shadow-lg shadow-green-500/50"
            twStylePlaceholder="text-green-500 shadow-lg"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
