import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "@/GlobalStyles";
import { colors } from "@/src/styles/colors";

export default StyleSheet.create({
  container: {
    flex:1,
    padding: Padding.p_base,
    marginVertical:32,
    justifyContent: 'center',
    backgroundColor: colors.backgroundPrincipal,
    gap: Padding.p_xs,
  },
  section: {
    flex:1,
    flexDirection: 'column',
    gap: 10,
    backgroundColor: colors.backgroundTertiary,
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
  card: {
    height:'15%',
    alignItems:'center',
    flexDirection: 'row',
    padding: 10 ,
    backgroundColor: colors.backgroundTertiary,
    gap:10,
    borderRadius:5,
  }
});
