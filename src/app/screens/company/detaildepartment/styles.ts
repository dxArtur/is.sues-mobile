import { StyleSheet } from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "@/GlobalStyles";

const styles = StyleSheet.create({
    component3Layout: {
      height: 24,
      width: 24,
      top: 13,
      position: "absolute",
    },
    descriptionLayout: {
      borderRadius: Border.br_5xl,
      top: 0,
      height: 44,
      position: "absolute",
    },
    description1Typo: {
      textAlign: "right",
      fontFamily: FontFamily.plusJakartaSansSemiBold,
      fontWeight: "600",
      lineHeight: 20,
      fontSize: FontSize.size_xs,
      color: Color.colorMidnightblue,
      letterSpacing: 0,
      top: 12,
      position: "absolute",
    },
    jobDetails: {
      left: 93,
      fontSize: FontSize.size_lg,
      lineHeight: 26,
      fontWeight: "700",
      fontFamily: FontFamily.plusJakartaSansBold,
      textAlign: "center",
      color: Color.colorMidnightblue,
      letterSpacing: 0,
      top: 12,
      position: "absolute",
    },
    component1Icon: {
      left: 24,
    },
    component3: {
      left: 335,
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
      height: 760,
      alignItems: "center",
      paddingTop: Padding.p_13xl,
      paddingBottom: Padding.p_37xl,
      backgroundColor: Color.base3,
      position: "absolute",
    },
    description1: {
      left: 20,
    },
    description: {
      right: 120,
      borderStyle: "solid",
      borderColor: Color.colorGainsboro_100,
      borderWidth: 1,
      width: 101,
      backgroundColor: Color.base3,
    },
    requirement1: {
      left: 8,
    },
    requirement: {
      right: 0,
      backgroundColor: Color.style,
      width: 108,
    },
    descriptionParent: {
      top: 478,
      left: 71,
      width: 221,
      height: 44,
      position: "absolute",
    },
    detalhesDaEmpresaDepartam: {
      backgroundColor: Color.base1,
      flex: 1,
      width: "100%",
      height: 812,
      overflow: "hidden",
    },
  });

  export default styles;