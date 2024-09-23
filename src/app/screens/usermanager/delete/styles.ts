import { StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding, Gap } from "@/GlobalStyles";

const styles = StyleSheet.create({
  container: {
    padding: Padding.p_5xl,
    paddingTop: Padding.p_45xl, // Espaço para a status bar
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: Color.base3,
  },
  title: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorMidnightblue,
    textAlign: "center",
    marginBottom: Gap.gap_md,
    marginTop: Gap.gap_lg,
  },
  employeeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Padding.p_sm,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  employeeText: {
    fontSize: FontSize.size_base,
  },
});

export default styles;
