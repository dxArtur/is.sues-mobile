import { Issue } from "@/src/dtos/IssueDTO";
import { colors } from "@/src/styles/colors";
import { Octicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, SafeAreaView, Alert} from "react-native";
import IssueAction from "./ButtonIssueAction";
import { getAuthorIssue, updateIssue } from "@/src/api/issues";
import { useAuth } from "@/src/app/hooks/useAuth";
import { useState, useEffect } from "react";


interface IssueViewProps {
    issue: Issue;
}

const IssueView: React.FC<IssueViewProps> = ({ issue }) => {
const { user } =useAuth()
const [authorName, setAuthorName] = useState<string>('Carregando...');
const [issueState, setIssueState] = useState<Issue>(issue)
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
            console.log('log de assume')
            const updateData = {
                ...issue,
                status: true,
                assignedUserId: user?.id,
            };
            const updatedIssue = await updateIssue(updateData)

            console.log(updatedIssue.status)
            console.log(updatedIssue.data)

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
        try {
            const updateData = {
                ...issue,
                status: false,
                assignedUserId: null,
            };
            const updatedIssue = await updateIssue(updateData);
            console.log('log de drop')
            console.log(updatedIssue.status)
            console.log(updatedIssue.data)
            setIssueState(prevState => ({ ...prevState, status: false }));
        } catch (error) {
            console.error(error)
            //Alert.alert('Erro', 'Ocorreu um erro ao abandonar a issue.');
        } finally {
            setLoading(false);
        }
    };

  

    return (

        <View style={styles.container}>
             {issueState.authorId === user?.id ? (
              <View style={styles.actionIssue}>
                  <IssueAction
                    borderWidth={1}
                    borderColor={colors.Secondary}
                    backgroundColor={colors.backgroundSecundary}
                    title="Editar issue"
                    onPress={handleAssignIssue}
                  />
                  <IssueAction
                    borderWidth={1}
                    borderColor={'red'}
                    textColor="red"
                    backgroundColor={colors.backgroundSecundary}
                    title="Encerrrar issue"
                    onPress={handleAssignIssue}
                  />
              </View>
            ): issueState.status ? (
                <View style={styles.actionIssue}>
                  <IssueAction
                    borderWidth={1}
                    borderColor={colors.Secondary}
                    backgroundColor={colors.backgroundSecundary}
                    title="Assinar issue"
                    onPress={handleAssignIssue}
                  />
                  <IssueAction
                    borderWidth={1}
                    borderColor={'red'}
                    backgroundColor={colors.backgroundSecundary}
                    title="Abandonar issue"
                    textColor="red"
                    onPress={handleDropIssue}
                  />
                </View>
            ) : (
                <View style={styles.actionIssue}>
                  <IssueAction
                    borderWidth={1}
                    borderColor={colors.Secondary}
                    backgroundColor={colors.backgroundSecundary}
                    title="Assumir issue"
                    onPress={handleAssumeIssue}
                  />
                </View>
            )}
            
            <View style={styles.issue}>
                <Text style={{ color: 'gray' }}>
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
                    {issue.description}
                </Text>
                <View style={styles.footerIssue}>
                    <Text style={issueState.status ? styles.statusInProgress : styles.statusOpen}>
                        {issueState.status ? 'Em progresso' : 'Aberta'}
                    </Text>
                    <Text style={styles.issueAuthor}>
                        por {authorName}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
        textAlign:"justify",
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

  export default IssueView