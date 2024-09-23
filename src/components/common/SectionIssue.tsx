import React, { useState } from 'react';
import { Checkbox as PaperCheckbox} from 'react-native-paper';
import { Pressable, StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/src/styles/colors';
import Title from './Title';
import { Issue } from '@/src/dtos/IssueDTO';
import IssuesList from './IssuesList';

interface SectionIssuesProps {
    issues: Issue[];
    isOpen: boolean;
    title: string;
    subtitle: string;
    toggleSection: () => void;
}



const SectionIssues: React.FC<SectionIssuesProps> = ({ title, subtitle, isOpen, toggleSection, issues }) => {
  return (
      <View style={styles.section}>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center' , gap:6}} onPress={toggleSection}>       
                <Title size={16} color="" fontWeight='light' text={title} />
                <Title size={16} color="" text={subtitle} />
                <MaterialIcons name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={20} color="gray" />
          </Pressable>
              {isOpen && <IssuesList issues={issues} />}
      </View>
  );
};


const styles = StyleSheet.create({
    section: {
        marginLeft:4,
        flexDirection: 'column',
        alignItems:'flex-start',
        backgroundColor: colors.backgroundSecundary,
      },
      iconBorder: {
        alignContent:'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'gray',
      }
  });

export default SectionIssues