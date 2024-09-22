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
  label: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    color: Color.colorMidnightblue,
    marginBottom: Gap.gap_sm,
    marginTop: Gap.gap_sm,
  },
  selectButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: Padding.p_xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    backgroundColor: Color.base3,
    marginBottom: Gap.gap_md,
  },
  selectButtonText: {
    fontSize: FontSize.size_base,
    color: Color.colorMidnightblue,
  },
  departmentDropdown: {
    padding: Padding.p_xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    backgroundColor: Color.base3,
    maxHeight: 150, // Limita a altura da lista de departamentos
    overflow: "scroll", // Adiciona rolagem
  },
  departmentItem: {
    padding: Padding.p_sm,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGainsboro_200,
  },
  departmentText: {
    fontSize: FontSize.size_base,
    color: Color.colorMidnightblue,
  },
});

export default styles;
