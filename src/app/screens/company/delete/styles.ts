import { StyleSheet } from "react-native";
import { FontFamily, FontSize, Color } from "@/GlobalStyles";

const styles = StyleSheet.create({
  pngwingcom71Position: {
    top: 145,
    position: "absolute",
  },
  jobDescriptionParentPosition: {
    width: 321,
    left: 0,
    position: "absolute",
  },
  remoteFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  salaryTypo: {
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  emailTypo: {
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    left: 77,
    lineHeight: 22,
    fontSize: FontSize.bodyTextMSemibold_size,
    color: Color.colorMidnightblue,
    letterSpacing: 0,
    position: "absolute",
  },
  jobDescription: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
    width: 175,
    height: 18,
    textAlign: "left",
    color: Color.colorMidnightblue,
    letterSpacing: 0,
    display: "flex",
    left: 3,
    top: 0,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: -65,
    color: Color.colorGray_100,
    width: 327,
    lineHeight: 22,
    fontSize: FontSize.bodyTextMSemibold_size,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    left: 3,
  },
  loremIpsumDolorSitAmetCoWrapper: {
    top: 91,
    height: 120,
  },
  jobDescriptionParent: {
    top: 408,
    height: 211,
  },
  groupChild: {
    width: 332,
    height: 132,
    left: 3,
    top: 0,
    position: "absolute",
  },
  email: {
    top: 160,
    textAlign: "left",
  },
  remote: {
    top: 243,
    textAlign: "center",
    justifyContent: "center",
    width: 160,
    alignItems: "center",
    display: "flex",
  },
  pngwingcom71: {
    left: 15,
    width: 51,
    height: 51,
  },
  salary: {
    top: 199,
    left: 26,
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    color: Color.colorDarkgray,
  },
  jobDetailParent: {
    left: 21,
    width: 335,
    height: 641,
  },
  detalhesDaEmpresaApagar: {
    backgroundColor: Color.base1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default styles;