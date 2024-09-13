import { useAuth } from '@/src/app/hooks/useAuth';
import React from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


interface HeaderCompanyProps {
  name: string;
  description: string
}

const Header: React.FC<HeaderCompanyProps> = ({name, description}) => {
    const { signOut, user } = useAuth();
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      
      <FontAwesome5 style={{backgroundColor:'#98ff98', padding:8, borderRadius:4}} name="building" size={45} color={"#003366"} />
      <Text style={[styles.nameCompany]}>{name}</Text>
      
      
      
      <Pressable style={{}}>
        <FontAwesome5 name="edit" size={24} color="black" />
      </Pressable>
    </View>
    
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <Text style={styles.description}>{'sobre a '}</Text>
        <Text style={[styles.description, {fontWeight:'bold'} ]}>{'empresa'}</Text>
      </View >
        <Text style={[styles.description, {marginLeft:25, marginVertical:10} ]}>{description}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
    padding: 16,
    justifyContent: 'space-between',
    color: '#808080',
    borderRadius:10
  },
  description: {
    alignItems:'flex-start',
    fontSize: 16,
    color: '#808080',
  },

  container:{
    flexDirection:'column',
    
    alignItems:'flex-start',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderRadius:10
  },
  containerRow: {
    flexDirection:'row',
    marginLeft:15,
  },
  greeting: {
    color:'#808080',
    fontSize: 16,
    fontWeight: 'thin',
  },
  nameCompany: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
  },


});

export default Header