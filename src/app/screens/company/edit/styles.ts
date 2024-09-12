import { StyleSheet } from "react-native";
import { Gap, FontFamily, FontSize, Padding, Color } from "@/GlobalStyles";

const styles = StyleSheet.create({
  informaOsDetalhes: {
    fontSize: FontSize.bodyTextSReg_size,
    letterSpacing: -0.2,
    fontFamily: FontFamily.bodyTextSReg,
    color: Color.text20LightBg,
    textAlign: "left",
    alignSelf: "stretch",
  },
  heading: {
    width: 375,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
  },
  input: {
    gap: Gap.gap_md,
    alignSelf: "stretch",
  },
  form: {
    alignSelf: "stretch",
  },
  container: {
    top: 154,
    left: 0,
    alignItems: "center",
    gap: Gap.gap_lg,
    position: "absolute",
  },
  editarEmpresa: {
    backgroundColor: Color.base1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default styles;  