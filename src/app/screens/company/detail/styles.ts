import { StyleSheet } from "react-native";
import { FontFamily, FontSize, Border, Color } from "@/GlobalStyles";

const styles = StyleSheet.create({
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
    top: 12,
    color: Color.colorMidnightblue,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
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
  groupChildPosition: {
    left: 3,
    top: 0,
    position: "absolute",
  },
  k11kTypo: {
    left: 77,
    lineHeight: 22,
    fontSize: FontSize.bodyTextMSemibold_size,
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  description1: {
    left: 20,
  },
  description: {
    right: 120,
    backgroundColor: Color.style,
    width: 101,
  },
  requirement1: {
    left: 8,
  },
  requirement: {
    right: 0,
    backgroundColor: Color.base3,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 108,
  },
  descriptionParent: {
    top: 478,
    left: 71,
    width: 221,
    height: 44,
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
    left: 3,
    top: 0,
    position: "absolute",
    color: Color.colorMidnightblue,
    letterSpacing: 0,
    display: "flex",
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
  },
  k11k: {
    top: 160,
    textAlign: "left",
  },
  salary: {
    top: 199,
    left: 26,
    color: Color.colorDarkgray,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  pngwingcom71: {
    left: 15,
    width: 51,
    height: 51,
  },
  remote: {
    top: 243,
    textAlign: "center",
    justifyContent: "center",
    width: 160,
    alignItems: "center",
    display: "flex",
  },
  jobDetailParent: {
    left: 21,
    width: 335,
    height: 641,
  },
  detalhesDaEmpresaDescri: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  map: {
    width: '100%',
    height: 200,
    marginTop: 5,
  },
  noMapText: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default styles;