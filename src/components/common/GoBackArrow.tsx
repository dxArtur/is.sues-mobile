import { FontAwesome6 } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native"

export const GoBackArrow =()=>{
    const navigation = useNavigation();
    return(
        <View>
            <Pressable>
                <FontAwesome6 name="arrow-left-long" size={24} color="black" onPress={() => navigation.goBack()}/>
            </Pressable>
        </View>
    )
}