// JobDescription.tsx
import React from 'react';
import { Text, View } from 'react-native';
import styles from '@/src/app/screens/company/detail/styles';

interface JobDescriptionProps {
  description: string;
}

const JobDescription: React.FC<JobDescriptionProps> = ({ description }) => (
  <View style={[styles.jobDescriptionParent, styles.jobDescriptionParentPosition]}>
    <Text style={[styles.jobDescription, styles.remoteFlexBox]}>
      {description || "Descrição não disponível"}
    </Text>
  </View>
);

export default JobDescription;
