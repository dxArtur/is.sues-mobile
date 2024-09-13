import { useAuth } from '@/src/app/hooks/useAuth';
import React from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


interface HeaderProfileProps {
  userName: string;
  userPhoto: string | null;
  occupation: string;
  onPress: ()=> void;
}

const HeaderProfile: React.FC<HeaderProfileProps> = ({ userName, userPhoto, occupation, onPress }) => {
    const { signOut, user } = useAuth();
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Image
        source={{ uri: userPhoto || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }} // Placeholder caso não haja foto
        style={styles.photo}
      />

      <View style={styles.textContainer}>
        
        <Text style={styles.occupation}>{`${occupation},`}</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Pressable onPress={onPress}>
        <FontAwesome5 name="edit" size={24} color="black" />
      </Pressable>


    </View>
    
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    // Adicione mais estilos conforme necessário
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd', // Cor de fundo para a foto
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft:4
  },
 /*  infoContainer: {
    gap:10,
    flexDirection:'row'
  }, */
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
  },
  occupation: {
    fontWeight:'thin'
  }

  /* header: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    //backgroundColor: '#f8f8f8',
    //borderBottomWidth: 1,
    //borderBottomColor: '#ddd',
    borderRadius:10,
    gap:10
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  container:{
    flexDirection:'column',
    gap:10,
  },
  textContainer: {
    flex:1,
    alignItems:'center',
  },
  userName: {
    
    fontSize: 18,
    color:'#003366',
    fontWeight: 'bold',
  },
  editContainer: {

    alignItems:'center',
    fontSize:16,
    marginRight:10
  },
  iconEdit: {
    color:'red',
    fontSize:20
  },
  textEdit: {
    fontSize:16,
    fontWeight:'bold',
    color:''
  } */
});

export default HeaderProfile