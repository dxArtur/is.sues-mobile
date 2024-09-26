import { FontAwesome6 } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native"




 const GoBackArrow : React.FC= ()=>{
const navigation = useNavigation();
    return(
        <View>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <FontAwesome6 name="arrow-left-long" size={24} color="black"/>
            </Pressable>
        </View>
    )
}

export default GoBackArrow