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
    style?: object;
    toggleSection: () => void;
}



const SectionIssues: React.FC<SectionIssuesProps> = ({ title, subtitle, isOpen, toggleSection, issues, style }) => {
  return (
      <View style={[styles.section, { height: isOpen ? 'auto' : 50 }]}>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center' , gap:6}} onPress={toggleSection}>       
                <Title size={16} color="" fontWeight='light' text={title} />
                <Title size={16} color="" text={subtitle} />
                {isOpen ? (<MaterialIcons name={"keyboard-arrow-down"} size={20} color="gray" /> ): (<MaterialIcons name={"keyboard-arrow-up"} size={20} color="gray" />)}
          </Pressable>
              {isOpen && <IssuesList issues={issues} />}
      </View>
  );
};


const styles = StyleSheet.create({
    section: {
      flex:1,
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