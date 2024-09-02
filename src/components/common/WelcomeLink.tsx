import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

interface WelcomeLinkProps {
  onPress: () => void;
  title: string;
  backgroundColor?: string;
  textColor?: string;

}

const WelcomeLink: React.FC<WelcomeLinkProps> = ({ onPress, title, backgroundColor, textColor }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor }]}>
      <Text style={[styles.buttonText]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textDecorationLine:'underline',
    color: 'gray',
    fontWeight: '500',
    fontSize: 15,
  },
});


export default WelcomeLink;