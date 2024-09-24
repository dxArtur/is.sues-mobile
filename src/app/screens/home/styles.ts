import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "@/GlobalStyles";

export default StyleSheet.create({
  container: {
    padding: Padding.p_base,
    justifyContent: 'center',
    backgroundColor: Color.base3,
    gap: Padding.p_xs,
  },
  section: {
    flexDirection: 'column',
    gap: Padding.p_xs,
    backgroundColor: Color.base3,
    padding: Padding.p_xs,
    paddingLeft: Padding.p_base,
    borderRadius: Border.br_xs,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGainsboro_200,
  },
  headerSection: {
    flexDirection: 'row',
    gap: Padding.p_sm,
  },
  titleSection: {
    paddingLeft: Padding.p_xs,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleSectionName: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontSize: FontSize.size_base,
  },
  titleSectionStatus: {
    fontWeight: 'bold',
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontSize: FontSize.size_base,
    color: Color.colorMidnightblue,
  },
  departmentIcon: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xs,
    padding: Padding.p_3xs,
  },
  iconInfoSection: {
    borderRadius: Border.br_5xs,
    borderWidth: 2,
    borderColor: Color.colorDarkgray,
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
