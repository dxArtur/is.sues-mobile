import { useAuth } from '@/src/app/hooks/useAuth';
import React from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


interface HeaderProps {
  userName: string;
  userPhoto: string | null;
}

const Header: React.FC<HeaderProps> = ({ userName, userPhoto }) => {
    const { signOut, user } = useAuth();
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Image
        source={{ uri: userPhoto || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }} // Placeholder caso não haja foto
        style={styles.photo}
      />
      <View>
      <Text style={styles.greeting}>Bem vindo,</Text>
      <Text style={styles.userName}>{userName}</Text>
      </View>
    </View>
    <Pressable style={styles.exitContainer} onPress={signOut}>
      <FontAwesome5 style={styles.iconExit} name="door-open" />
      <Text style={styles.textExit}>Sair</Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    //backgroundColor: '#f8f8f8',
    //borderBottomWidth: 1,
    //borderBottomColor: '#ddd',
    borderRadius:10
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  container:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  greeting: {
    color:'#808080',
    fontSize: 16,
    fontWeight: 'thin',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exitContainer: {

    alignItems:'center',
    fontSize:16,
    marginRight:10
  },
  iconExit: {
    color:'red',
    fontSize:20
  },
  textExit: {
    fontSize:16,
    fontWeight:'bold',
    color:'red'
  }
});

export default Header