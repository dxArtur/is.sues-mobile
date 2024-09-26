import { colors } from "@/src/styles/colors"
import IssueAction from "../../ButtonIssueAction"
import { useNavigation } from "@react-navigation/native";
import { Issue } from "@/src/dtos/IssueDTO";
import { View, StyleSheet } from "react-native";


interface IssueViewProps {
    issue: Issue;
    Assign: ()=>{};
    Drop: ()=>{};
}


const InProgressIssuesActionsUser:React.FC<IssueViewProps> = ({issue, Assign, Drop}) => {

    return(
        <View style={styles.container}>
        <IssueAction
            borderWidth={1}
            borderColor={colors.Secondary}
            backgroundColor={colors.backgroundSecundary}
            title="Assinar issue"
            onPress={Assign}
        />
        <IssueAction
            borderWidth={1}
            borderColor={colors.Secondary}
            backgroundColor={colors.backgroundSecundary}
            title="Abandonar issue"
            onPress={Drop}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap:10,
        flexDirection:'row'
    }
})

export default InProgressIssuesActionsUser