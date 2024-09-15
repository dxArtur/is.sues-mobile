import { SafeAreaView, View, StyleSheet, Text, Pressable} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";
import { Issue } from "@/src/dtos/IssueDTO";
import { RouteProp } from "@react-navigation/native";
import { getAuthorIssue } from "@/src/api/issues";
import { useState, useEffect } from "react";




type RootStackParamList = {
    IssueDetails: { issue: Issue };
  };
  
  
type IssueDetailsRouteProp = RouteProp<RootStackParamList, 'IssueDetails'>;

type Props = {
  route: IssueDetailsRouteProp;
};

  
  const IssueDetails  = ({ route }:Props) => {
    const [authorName, setAuthorName] = useState<string>('Carregando...');
    const { issue } = route.params;

    useEffect(() => {
        async function fetchUserName() {
          const name = await getAuthorIssue(issue.authorId);
          setAuthorName(name);
        }
        fetchUserName();
      }, [issue.authorId]);

    return (
        <SafeAreaView style={styles.container}>
            {issue.status ? (
                <View style={styles.actionIssue}>
                    <Pressable style={styles.doneIssue} onPress={()=>{}}  >
                        <Text style={[styles.buttonText]}>
                            Concluir issue
                        </Text>
                    </Pressable>
                    <Pressable style={styles.dropIssue} onPress={()=>{}}  >
                        <Text style={styles.buttonText}>
                            Abandonar issue
                        </Text>
                    </Pressable>
                </View>
            ) : (
                <View style={styles.actionIssue}>
                    <Pressable style={styles.button} onPress={()=>{}}  >
                        <Text style={styles.buttonText}>
                            Assumir issue
                        </Text>
                    </Pressable>
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
                <Text style={issue.status ? styles.statusInProgress : styles.statusOpen}>
                {issue.status?'Em progresso':'Aberta'}
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
      statusInProgress: {},
      statusOpen:{
        padding:4,
        fontSize:16,
        color:'#004d40',
        backgroundColor:'#a5d6a7',
        fontWeight:'bold',
        borderRadius:10
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