import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface HeaderProps {
  userName: string;
  userPhoto: string | null;
}

const Header: React.FC<HeaderProps> = ({ userName, userPhoto }) => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: userPhoto || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }} // Placeholder caso não haja foto
        style={styles.photo}
      />
      <View style={styles.container}>
      <Text style={styles.greeting}>Bem vindo,</Text>
      <Text style={styles.userName}>{userName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderRadius:10
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  container:{
    alignItems: 'flex-start',
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
});

export default Header