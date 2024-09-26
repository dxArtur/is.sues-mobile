import { Issue } from "@/src/dtos/IssueDTO";
import { colors } from "@/src/styles/colors";
import { Octicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, SafeAreaView, Alert} from "react-native";
import IssueAction from "./ButtonIssueAction";
import { getAuthorIssue, getIssue, getIssues, updateIssue } from "@/src/api/issues";
import { useAuth } from "@/src/app/hooks/useAuth";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import OpenIssuesActionsAuthor from "./actionInIssuesForUsers/author/InProgressIssuesActionsAuthor";
import OpenIssuesActionsUser from "./actionInIssuesForUsers/user/OpenIssuesActionsUsers";
import InProgressIssuesActionsUser from "./actionInIssuesForUsers/user/InProgressActionsUsers";
import InProgressIssuesActionsAuthor from "./actionInIssuesForUsers/author/InProgressIssuesActionsAuthor";



interface IssueViewProps {
    issue: Issue;
}

const IssueView: React.FC<IssueViewProps> = ({ issue }) => {
const navigation = useNavigation();
const { user } =useAuth()
const [authorName, setAuthorName] = useState<string>('Carregando...');
const [issueState, setIssueState] = useState<Issue>(issue)
const [loading, setLoading] = useState<boolean>(false);


const fetchIssueData = async () => {
  try {
      const updatedIssue = await getIssue(issue.id!); // Função que busca a issue pelo ID
      setIssueState(updatedIssue); // Atualiza o estado com os dados mais recentes
  } catch (error) {
      console.error('Erro ao buscar dados da issue:', error);
  }
};

useEffect(() => {
    async function fetchUserName() {
      const name = await getAuthorIssue(issue.authorId);
      setAuthorName(name);
    }
    fetchUserName();
  }, [issue.authorId]);


    // Função para atualizar a issue na API
    const handleEditIssue = async () => {
      navigation.navigate('EditIssues', {issue})
  };

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
      await getIssues()
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao assumir a issue.');
    } finally {
      setLoading(false);
    }
  };

  const handleAssignIssue = async () => {
    setLoading(true);
    try {
      const updatedIssue = {
        ...issue,
        isAssigned: true,
        status: true,
      }
      const response = await updateIssue(updatedIssue);
      setIssueState(prevState => ({ ...prevState, isAssigned: true, status: true, }));
      console.log(response.data)
      await getIssues()
      Alert.alert('Sucesso', 'Issue assumida com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao assinar a sua issue.');
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
            setIssueState(prevState => ({ ...prevState, status: false, assignedUserId: null, }));
            await getIssues() 
          } catch (error) {
            console.error(error)
            //Alert.alert('Erro', 'Ocorreu um erro ao abandonar a issue.');
        } finally {
            setLoading(false);
        }
    };

    const isAuthor = issueState.authorId === user?.id;
    const isAssignedUser = issueState.assignedUserId === user?.id;
    const inProgress = issueState.status;
    
    let actionComponent = null;
    if (!issueState.isAssigned) {
      if (isAuthor) {
          actionComponent = inProgress ? (
              <IssueAction
                  borderWidth={1}
                  borderColor={colors.Secondary}
                  backgroundColor={colors.backgroundSecundary}
                  title="Editar issue"
                  onPress={handleEditIssue}
              />
          ) : (
              <View>
                  <IssueAction
                      borderWidth={1}
                      borderColor={colors.Secondary}
                      backgroundColor={colors.backgroundSecundary}
                      title="Editar issue"
                      onPress={handleEditIssue}
                  />
                  <IssueAction
                      borderWidth={1}
                      borderColor={'red'}
                      textColor="red"
                      backgroundColor={colors.backgroundSecundary}
                      title="Assine sua issue"
                      onPress={handleAssignIssue}
                  />
              </View>
          );
      } else if (isAssignedUser) {
          // Se for o usuário atribuído
          if (inProgress) {
              actionComponent = (
                  <View style={styles.actionIssue}>
                      <IssueAction
                          borderWidth={1}
                          borderColor={'red'}
                          backgroundColor={colors.backgroundSecundary}
                          title="Abandonar issue"
                          textColor="red"
                          onPress={handleDropIssue}
                      />
                      <IssueAction
                          borderWidth={1}
                          borderColor={colors.Secondary}
                          backgroundColor={colors.backgroundSecundary}
                          title="Assinar issue"
                          onPress={handleAssignIssue}
                      />
                  </View>
              );
          } else {
              actionComponent = (
                  <IssueAction
                      borderWidth={1}
                      borderColor={colors.Secondary}
                      backgroundColor={colors.backgroundSecundary}
                      title="Assumir issue"
                      onPress={handleAssumeIssue}
                  />
              );
          }
      } else {
          // Aqui, o usuário não é o autor e não é o atribuído
          if (!inProgress) {
              // Se a issue está aberta e não é atribuída a ele
              actionComponent = (
                  <IssueAction
                      borderWidth={1}
                      borderColor={colors.Secondary}
                      backgroundColor={colors.backgroundSecundary}
                      title="Assumir issue"
                      onPress={handleAssumeIssue}
                  />
              );
          } else {
              actionComponent = null; // Não exibe nada se estiver em progresso e não for o autor nem o atribuído
          }
      }
  }

    return (
      <View style={styles.container}> 
      {actionComponent}


        {/* {!issueState.isAssigned ? (  // Verifica se a issue não está assinada
           issueState.authorId === user?.id ? ( // Se o usuário for o autor, se ele não for eu verifico
            issueState.status ? //se issue estiver aberta, true e significa fechada
              <InProgressIssuesActionsAuthor issue={issue} />
            :
              <OpenIssuesActionsAuthor issue={issue} />
            ): (issueState.assignedUserId === user?.id ? //verifico se o usuario da sessão que esta realizando a issue
                <InProgressIssuesActionsUser issue={issue}/>
              : < OpenIssuesActionsUser issue={issue} /> )
            ): null} */}

              
          {/* {!issueState.isAssigned ? ( // Verifica se a issue não está assinada
          issueState.authorId === user?.id ? ( // Se o usuário for o autor
            issueState.status ?
            // Ações de autor em issues fechadas
            <IssueAction
                    borderWidth={1}
                    borderColor={colors.Secondary}
                    backgroundColor={colors.backgroundSecundary}
                    title="Editar issue"
                    onPress={handleEditIssue}
                /> 
            :
            // Ações de uator em issues abertas
            <View style={styles.actionIssue}>
                <IssueAction
                    borderWidth={1}
                    borderColor={colors.Secondary}
                    backgroundColor={colors.backgroundSecundary}
                    title="Editar issue"
                    onPress={handleEditIssue}
                />
                <IssueAction
                    borderWidth={1}
                    borderColor={'red'}
                    textColor="red"
                    backgroundColor={colors.backgroundSecundary}
                    title="Assine sua issue"
                    onPress={handleAssignIssue}
                />
            </View>
        ) : issueState.status ? ( // Se não for o autor, mas a issue está aberta
            <View style={styles.actionIssue}>
                <IssueAction
                    borderWidth={1}
                    borderColor={colors.Secondary}
                    backgroundColor={colors.backgroundSecundary}
                    title="Assumir issue"
                    onPress={handleAssumeIssue}
                />
            </View>
        ) : ( // Se não for o autor mas a issue não está aberta
            issueState.assignedUserId === user?.id ? ( // Verifica se o usuário é o 
                <View style={styles.actionIssue}>
                    <IssueAction
                        borderWidth={1}
                        borderColor={'red'}
                        backgroundColor={colors.backgroundSecundary}
                        title="Abandonar issue"
                        textColor="red"
                        onPress={handleDropIssue}
                    />
                    <IssueAction
                        borderWidth={1}
                        borderColor={colors.Secondary}
                        backgroundColor={colors.backgroundSecundary}
                        title="Assinar issue"
                        onPress={handleAssignIssue}
                    />
                </View>
            ) : null // Se não é o atribuído, não exibe nada
        )
    ) : null}  */}
            
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
                        {issueState.isAssigned ? (
                          'Concluída'
                        ):(
                          issueState.status ? 'Em progresso' : 'Aberta'
                        )}
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