import { StyleSheet } from 'react-native';
import { Color, Padding, FontFamily, FontSize, Border } from '@/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    padding: Padding.p_5xl,
    paddingTop: Padding.p_45xl, // Espaço para a status bar
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: Color.base3,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.style,
    padding: Padding.p_sm,
    borderRadius: Border.br_base,
    marginBottom: Padding.p_base,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd', // Cor de fundo para a foto
  },
  textContainer: {
    flex: 1,
    marginLeft: Padding.p_xs,
  },
  userName: {
    fontSize: FontSize.size_lg,
    fontWeight: 'bold',
    color: '#003366',
  },
  occupation: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansMedium,
    color: Color.colorGray_100,
  },
  section: {
    backgroundColor: Color.style,
    padding: Padding.p_base,
    marginBottom: Padding.p_base,
    borderRadius: Border.br_base,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGainsboro_200,
  },
  label: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontSize: FontSize.size_xs,
    marginBottom: Padding.p_xs,
  },
  value: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorMidnightblue,
  },
});

export default styles;
