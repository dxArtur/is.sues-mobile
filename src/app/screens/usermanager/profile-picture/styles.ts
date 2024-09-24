import { StyleSheet } from 'react-native';
import { Color, Padding, FontFamily, FontSize, Border } from '@/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Padding.p_5xl,
    backgroundColor: Color.base3,
  },
  title: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorMidnightblue,
    marginBottom: Padding.p_3xs,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: Padding.p_base,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.primaryRegular,
    padding: Padding.p_xs,
    borderRadius: Border.br_base,
    marginBottom: Padding.p_base,
  },
  buttonUpload: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.colorMediumpurple_100,
    padding: Padding.p_xs,
    borderRadius: Border.br_base,
    marginTop: Padding.p_sm,
  },
  buttonText: {
    marginLeft: Padding.p_xs,
    color: '#fff',
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontSize: FontSize.size_base,
  },
});

export default styles;
