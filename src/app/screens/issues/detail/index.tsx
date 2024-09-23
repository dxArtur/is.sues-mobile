import { SafeAreaView, View, StyleSheet, Text, Pressable, Alert} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";
import { Issue} from "@/src/dtos/IssueDTO";
import { RouteProp } from "@react-navigation/native";
import { getAuthorIssue, updateIssue } from "@/src/api/issues";
import { useState, useEffect } from "react";
import IssueAction from "@/src/components/common/ButtonIssueAction";
import { assumeIssue } from "@/src/api/apiUser";
import { useAuth } from "@/src/app/hooks/useAuth";
import { GoBackArrow } from "@/src/components/common/GoBackArrow";
import IssueItem from "@/src/components/common/Issue";
import IssueView from "@/src/components/common/IssueView";


type RootStackParamList = {
    IssueDetails: { issue: Issue };
  };
  
type IssueDetailsRouteProp = RouteProp<RootStackParamList, 'IssueDetails'>;

type Props = {
  route: IssueDetailsRouteProp;
};
  
  const IssueDetails  = ({ route }:Props) => {
    const { user } =useAuth()
    const { issue } = route.params;
   

    return (
        <SafeAreaView style={styles.container}>
          <GoBackArrow />
            <IssueView
              issue={issue}
            />
      </SafeAreaView>
    )
}

export default IssueDetails


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