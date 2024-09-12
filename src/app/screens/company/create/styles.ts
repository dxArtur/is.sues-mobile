import { StyleSheet } from "react-native";
import { Gap, FontFamily, FontSize, Padding, Border, Color } from "@/GlobalStyles";

const styles = StyleSheet.create({
  modalFlexBox: {
    alignItems: "center",
    gap: Gap.gap_lg,
    paddingTop: Padding.p_37xl,
  },
  jobDetails: {
    top: 12,
    left: 125,
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
    height: 50,
    width: 375,
  },
  informaOsDetalhes: {
    fontSize: FontSize.bodyTextSReg_size,
    letterSpacing: -0.2,
    fontFamily: FontFamily.bodyTextSReg,
    color: Color.text20LightBg,
    textAlign: "left",
    alignSelf: "stretch",
  },
  heading: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    width: 375,
  },
  input: {
    gap: Gap.gap_md,
    alignSelf: "stretch",
  },
  form: {
    alignSelf: "stretch",
    gap: Gap.gap_lg,
  },
  container: {
    gap: Gap.gap_lg,
  },
  modal: {
    bottom: 0,
    left: 0,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    backgroundColor: Color.base3,
    height: 760,
    paddingTop: Padding.p_13xl,
    paddingBottom: Padding.p_37xl,
    gap: Gap.gap_lg,
    position: "absolute",
  },
  criarEmpresa: {
    backgroundColor: Color.base1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default styles;
