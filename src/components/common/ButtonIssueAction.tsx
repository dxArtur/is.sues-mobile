import { colors } from '@/src/styles/colors';
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface IssueActionProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  onPress: () => void;
}

const IssueAction: React.FC<IssueActionProps> = ({ title, backgroundColor = colors.primary, textColor = colors.Secondary, onPress }) => {
    return(
    <Pressable style={[styles.actionButton, { backgroundColor }]} onPress={onPress}  >
        <Text style={[styles.buttonText, {color: textColor}]}>
            {title}
        </Text>
    </Pressable>
    )
}

const styles = StyleSheet.create({
    
    actionButton:{
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 14,
      }
})

export default IssueAction