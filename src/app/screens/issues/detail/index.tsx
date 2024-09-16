import { SafeAreaView, View, StyleSheet, Text, Pressable, Alert} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";
import { Issue } from "@/src/dtos/IssueDTO";
import { RouteProp } from "@react-navigation/native";
import { getAuthorIssue, updateIssue } from "@/src/api/issues";
import { useState, useEffect } from "react";
import IssueAction from "@/src/components/common/ButtonIssueAction";
import { assumeIssue } from "@/src/api/apiUser";
import { useAuth } from "@/src/app/hooks/useAuth";
import { GoBackArrow } from "@/src/components/common/GoBackArrow";




type RootStackParamList = {
    IssueDetails: { issue: Issue };
  };
  
  
type IssueDetailsRouteProp = RouteProp<RootStackParamList, 'IssueDetails'>;

type Props = {
  route: IssueDetailsRouteProp;
};

  
  const IssueDetails  = ({ route }:Props) => {
    const { user } =useAuth()
    const [authorName, setAuthorName] = useState<string>('Carregando...');
    const { issue } = route.params;
    const [issueState, setIssueState] = useState<Issue>(route.params.issue)
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchUserName() {
          const name = await getAuthorIssue(issue.authorId);
          setAuthorName(name);
        }
        fetchUserName();
      }, [issue.authorId]);


  // Função para atualizar a issue na API
  const handleAssumeIssue = async () => {
    setLoading(true);
    try {
      const issueUpdated = await assumeIssue(user!, issue, { status: true });
      console.log(issueUpdated)
      setIssueState(prevState => ({ ...prevState, status: true }));
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao assumir a issue.');
    } finally {
      setLoading(false);
    }
  };


  const handleAssignIssue = async () => {
    setLoading(true);
    try {
      await updateIssue(issue.id, { isAssigned: true });
      setIssueState(prevState => ({ ...prevState, isAssigned: true }));
      Alert.alert('Sucesso', 'Issue assumida com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao assumir a issue.');
    } finally {
      setLoading(false);
    }
  };

  const handleDropIssue = async () => {
    setLoading(true);
    console.log(issue.id)
    try {
      const updatedIssue = await updateIssue(issue.id, {status:false});
      console.log(updatedIssue)
      setIssueState(prevState => ({ ...prevState, status: false }));
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Ocorreu um erro ao assumir a issue.');
    } finally {
      setLoading(false);
    }
  };

    return (
        <SafeAreaView style={styles.container}>
          <GoBackArrow />
            {issueState.status ? (
                <View style={styles.actionIssue}>
                  <IssueAction
                    title="Assinar issue"
                    onPress={handleAssignIssue}
                  />
                  <IssueAction
                    title="Abandonar issue"
                    backgroundColor="red"
                    textColor="white"
                    onPress={handleDropIssue}
                  />
                </View>
            ) : (
                <View style={styles.actionIssue}>
                  <IssueAction
                    title="Assumir issue"
                    onPress={handleAssumeIssue}
                  />
                </View>
            )}
            
            <View style={styles.issue}>
            <Text >
            aberta em {issue.createdAt}
            </Text>
            <View style={styles.titleIssueContainer}>
            <Octicons name="issue-opened" size={20} color="gray" />
            <View style={styles.titleContainer}>
                <Text style={styles.issueTitle}>
                {issue.title}
                </Text>
                
            </View>
                
            </View>
            <Text style={styles.descriptionContainer}>
                aberta em {issue.description}
            </Text>
            <View style={styles.footerIssue}>
                <Text style={issueState.status ? styles.statusInProgress : styles.statusOpen}>
                {issueState.status?'Em progresso':'Aberta'}
                </Text>
                <Text style={styles.issueAuthor}>
                por {authorName}
                </Text>
            </View>
        </View>
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
    issue: {
        backgroundColor: colors.backgroundSecundary, //'#f8f8f8', //'#f2f2f2',
        padding: 4,
        paddingLeft: 10,
        borderRadius: 5,
        borderBottomWidth: 2,
        borderBottomColor: colors.borderPrincipal, //'#ddd',
      },
      issueTitle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      issueInfo: {
        fontSize: 12,
        color: 'gray',
      },
      actionIssue: {
        flexDirection:'row',
        gap: 10,
        alignContent:'flex-start',
        marginTop:32,
        margin:8
    },
      titleIssueContainer: {
        margin: 4,
        gap: 8,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 6,
      },
      titleContainer: {
        paddingBottom: 2,
        marginLeft: 2,
        marginRight: 6,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderPrincipal,
        flex:1,
      },

      descriptionContainer: {
        backgroundColor: colors.backgroundPrincipal,
        borderRadius:5,
        padding:10,
        marginLeft: 2,
        marginRight: 6,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderPrincipal,
      },
      footerIssue: {
        marginRight:10,
        marginLeft:6,
        marginVertical:4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      issueAuthor: {
        fontStyle:'italic',
        fontSize: 12,
        fontWeight:'thin',
        color: 'gray',
    },
      statusInProgress: {
        padding:4,
        fontSize:16,
        color: colors.Secondary,
        backgroundColor: '#00bcd4',
        fontWeight:'bold',
        borderRadius:10,
        paddingHorizontal:10
      },
      statusOpen:{
        padding:4,
        fontSize:16,
        color:'#004d40',
        backgroundColor:'#a5d6a7',
        fontWeight:'bold',
        borderRadius:10,
        paddingHorizontal:10
      },

      button: {
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
      },
      buttonText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.Secondary
      },

      dropIssue: {
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red'
      },

      doneIssue: {
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'green'
      },
})