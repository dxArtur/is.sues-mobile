import { colors } from "@/src/styles/colors"
import IssueAction from "../../ButtonIssueAction"
import { useNavigation } from "@react-navigation/native";
import { Issue } from "@/src/dtos/IssueDTO";
import { View, StyleSheet } from "react-native";


interface IssueViewProps {
    issue: Issue;
    Edit: ()=>{};
    Assign: ()=>{};
}


const OpenIssuesActionsAuthor:React.FC<IssueViewProps> = ({issue, Edit, Assign}) => {

    
    return(
        <View style={styles.container}>
        <IssueAction
            borderWidth={1}
            borderColor={colors.Secondary}
            backgroundColor={colors.backgroundSecundary}
            title="Editar issue"
            onPress={Edit}
        />
        <IssueAction
            borderWidth={1}
            borderColor={colors.Secondary}
            backgroundColor={colors.backgroundSecundary}
            title="Assine sua issue"
            onPress={Assign}
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

export default OpenIssuesActionsAuthor