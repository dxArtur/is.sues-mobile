import { colors } from "@/src/styles/colors"
import IssueAction from "../../ButtonIssueAction"
import { Issue } from "@/src/dtos/IssueDTO";
import { View, StyleSheet } from "react-native";



interface IssueViewProps {
    issue: Issue;
    Assume: ()=>{}
}


const OpenIssuesActionsUser:React.FC<IssueViewProps> = ({issue, Assume}) => {    
    return( 
        <View style={styles.container}>
        <IssueAction
            borderWidth={1}
            borderColor={colors.Secondary}
            backgroundColor={colors.backgroundSecundary}
            title="Assumir issue"
            onPress={Assume}
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


export default OpenIssuesActionsUser