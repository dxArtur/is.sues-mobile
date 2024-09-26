import { SafeAreaView, View, StyleSheet, Text, Pressable, Alert} from "react-native";
import { colors } from "@/src/styles/colors";
import { Issue} from "@/src/dtos/IssueDTO";
import { RouteProp, useRoute } from "@react-navigation/native";
import IssueAction from "@/src/components/common/ButtonIssueAction";
import IssueItem from "@/src/components/common/Issue";
import IssueView from "@/src/components/common/IssueView";
import GoBackArrow from "@/src/components/common/GoBackArrow";



type IssueDetailsRouteProp = {
  issue: Issue;
};
  
  const DetailIssue = () => {
    const route = useRoute()
    const { issue } = route.params as IssueDetailsRouteProp;
   
    return (
        <SafeAreaView style={styles.container}>
         <GoBackArrow 
            
          />
            <IssueView
              issue={issue}
            />
      </SafeAreaView>
    )
}

export default DetailIssue 


const styles = StyleSheet.create({
    container: {
        padding: 24,
        marginTop:32,
        flex:1,
        justifyContent:'flex-start' ,
        backgroundColor: colors.backgroundPrincipal,
        gap: 6,
      },

})