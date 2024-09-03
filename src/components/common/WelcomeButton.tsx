import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

interface WelcomeButtonProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  link: string

}

const WelcomeButton: React.FC<WelcomeButtonProps> = ({  title, backgroundColor, textColor, link }) => {
  return (
    <Pressable  style={[styles.button, { backgroundColor }]}>
        <Link href={link}>
            <Text style={[styles.buttonText, { color: textColor || '#fff' }]}>{title}</Text>
        </Link>
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default WelcomeButton;