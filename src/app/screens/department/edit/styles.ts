import { StyleSheet, StatusBar } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding, Gap } from "@/GlobalStyles";

const styles = StyleSheet.create({
  container: {
    padding: Padding.p_5xl,
    paddingTop: Padding.p_45xl, // Espaço para a status bar
    
    flexGrow: 1,
    paddingBottom: 20,
    //paddingTop: 10,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Gap.gap_lg,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_xs,
  },
  searchIcon: {
    marginRight: Padding.p_xs,
  },
  searchInput: {
    flex: 1,
    padding: Padding.p_xs,
    fontSize: FontSize.size_base,
  },
  departmentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Padding.p_sm,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  departmentText: {
    fontSize: FontSize.size_base,
  },
  editSection: {
    marginTop: Gap.gap_lg,
    padding: Padding.p_5xl,
    backgroundColor: Color.base3,
    borderRadius: Border.br_xs,
  },
  label: {
    fontSize: FontSize.size_base,
    marginBottom: Padding.p_xs,
    color: Color.colorMidnightblue,
  },
  input: {
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderRadius: Border.br_xs,
    padding: Padding.p_xs,
    marginBottom: Gap.gap_md,
  },
});

export default styles;
