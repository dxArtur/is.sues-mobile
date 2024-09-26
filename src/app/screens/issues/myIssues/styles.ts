import { StyleSheet } from 'react-native';
import { colors } from '@/src/styles/colors';
import { Color, Padding } from "@/GlobalStyles";

const styles = StyleSheet.create({
    container: {
        padding: Padding.p_5xl,
        paddingTop: Padding.p_45xl, 
        flexGrow: 1,
        paddingBottom: 20,
      },
  titleColor: {
    color: Color.colorMidnightblue,
  },
});

export default styles;
