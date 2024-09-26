import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";
import {TextInput} from "react-native-paper"


interface IssuesInputProps {
    placeholder: string;
    borderWidth?: number;
    borderColor?: string;
    backgroundColor?: string;
    lines?: number;
    value: string;
    onChange: (text: string) => void
}

const IssuesInput: React.FC<IssuesInputProps> = ({ placeholder, borderWidth, backgroundColor, borderColor, lines, value, onChange }) => {

    return (
        <TextInput
            underlineColor={colors.borderPrincipal}
            activeUnderlineColor={colors.borderPrincipal}
            cursorColor={colors.borderPrincipal}
            textColor={'gray'}
            placeholderTextColor={'gray'}
            style={styles.input}
            placeholder={placeholder}
            numberOfLines={lines}
            multiline ={lines! >1}
            value={value}
            onChangeText={onChange}
        />
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: colors.backgroundPrincipal,
        borderWidth:1,
        borderColor: colors.borderPrincipal,
    },
    underline: {
        borderBottomWidth: 2,
        borderBottomColor:colors.borderPrincipal,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
    }
})

export default IssuesInput