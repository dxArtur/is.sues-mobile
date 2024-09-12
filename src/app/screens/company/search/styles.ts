import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "@/GlobalStyles";

const styles = StyleSheet.create({
  buscarEmpresas: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchInput: {
    position: 'absolute',
    opacity: 0, // Mantém a interação do usuário, mas deixa invisível
    width: 327,
    height: 52,
  },
  searchContainer: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bgPosition: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  bg: {
    borderRadius: Border.br_base,
    backgroundColor: Color.base3,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
  },
  bgGroupLayout: {
    height: 128,
    left: 0,
    position: "absolute",
    width: 327,
  },
  bgParent: {
    top: 0,
  },
  groupWrapper: {
    height: "33.13%",
    width: "60.55%",
    top: "10.78%",
    right: "34.56%",
    bottom: "56.09%",
    left: "4.89%",
    position: "absolute",
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyEmail: {
    fontSize: 14,
    color: '#888',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  detailsButton: {
    padding: 8,
    borderRadius: 5,
  },
  editButton: {
    padding: 8,
    borderRadius: 5,
  },
  jobDetails: {
    top: 30,
    left: 100,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorMidnightblue,
    textAlign: "center",
    position: "absolute",
  },
  component1Icon: {
    top: 30,
    left: 24,
    width: 24,
    height: 24,
    position: "absolute",
  },
  appBar: {
    height: 50,
    width: 375,
  },
  largeLabelMedium16px: {
    color: Color.base3,
    textAlign: "center",
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  label: {
    borderRadius: Border.br_5xl,
    width: 138,
    height: 56,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
});

export default styles;