import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "@/GlobalStyles";
import { colors } from "@/src/styles/colors";

export default StyleSheet.create({
  container: {
    padding: Padding.p_base,
    marginVertical:32,
    justifyContent: 'center',
    backgroundColor: colors.backgroundPrincipal,
    gap: Padding.p_xs,
  },
  section: {
    flexDirection: 'column',
    gap: 10,
    backgroundColor: Color.base3,
    padding: Padding.p_xs,
    paddingLeft: Padding.p_base,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: colors.borderPrincipal
  },
  headerSection: {
    flexDirection: 'row',
    gap: 10,
  },
  titleSection: {
    paddingLeft: Padding.p_xs,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleSectionName: {
    fontSize: 16,
    color: 'gray'
    //color: Color.colorGray_100,
    //fontFamily: FontFamily.plusJakartaSansMedium,
    //fontSize: FontSize.size_base,
  },
  titleSectionStatus: {
    fontWeight: 'bold',
    color: 'gray',
    //fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontSize: 16,
    //color: Color.colorMidnightblue,
  },
  departmentIcon: {
    backgroundColor: colors.borderPrincipal, //Color.colorGainsboro_100,
    borderRadius: Border.br_xs,
    padding: Padding.p_3xs,
  },
  iconInfoSection: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'gray'
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.base3,
  },
  loadingText: {
    marginTop: Padding.p_xs,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.primaryRegular,
  },
});
