import { StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding, Gap } from "@/GlobalStyles";

const styles = StyleSheet.create({
  jobDetails: {
    top: 12,
    left: 99,
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
    top: 13,
    left: 24,
    width: 24,
    height: 24,
    position: "absolute",
  },
  appBar: {
    width: 375,
    height: 50,
  },
  modal: {
    bottom: 0,
    left: 0,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    backgroundColor: Color.base3,
    height: 760,
    alignItems: "center",
    paddingTop: Padding.p_13xl,
    paddingBottom: Padding.p_37xl,
    gap: Gap.gap_lg,
    position: "absolute",
  },
  criarDepartamento: {
    backgroundColor: Color.base1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default styles;
