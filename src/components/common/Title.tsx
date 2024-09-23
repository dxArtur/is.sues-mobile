import React from 'react';
import { Checkbox as PaperCheckbox} from 'react-native-paper';
import { StyleSheet, Text} from 'react-native';

interface TitleProps {
  color: string;
  text: string;
  fontWeight?: 'normal' | 'bold' | 'light';
  size?: number;
}

const Title: React.FC<TitleProps> = ({ text, color, fontWeight='bold', size=18}) => {
  return (
    <Text style={[styles.text, {fontWeight, fontSize:size} ]}>
        {text}
    </Text>

  );
};


const styles = StyleSheet.create({
    text: {
      marginVertical:6,
      fontWeight: 'bold',
      fontSize: 18,
    },
  });

export default Title