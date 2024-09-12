import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "@/GlobalStyles";

const GroupComponent2 = () => {
  return (
    <View
      style={[styles.detalhesDaEmpresaDepartamInner, styles.groupParentLayout]}
    >
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={styles.groupContainer}>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={[styles.groupFrame, styles.groupLayout]}>
              <View style={[styles.groupFrame, styles.groupLayout]}>
                <Text style={[styles.seniorUiuxDesigner, styles.seniorTypo]}>
                  Vendas
                </Text>
              </View>
            </View>
          </View>
          <Image
            style={[styles.lineIcon, styles.lineIconLayout]}
            contentFit="cover"
            source={require("@/src/assets/images/line.png")}
          />
          <View style={[styles.groupView, styles.groupViewLayout]}>
            <View
              style={[styles.nameDescriptionParent, styles.groupViewLayout]}
            >
              <View style={styles.nameDescriptionPosition}>
                <Text
                  style={[
                    styles.seniorUiuxDesigner1,
                    styles.nameDescriptionPosition,
                  ]}
                >
                  Jurídico
                </Text>
              </View>
              <View style={styles.chip} />
            </View>
          </View>
          <Image
            style={[styles.lineIcon1, styles.lineIconLayout]}
            contentFit="cover"
            source={require("@/src/assets/images/line1.png")}
          />
        </View>
        <Text
          style={[styles.applicationStatus3, styles.applicationStatus3Position]}
        >
          Departamentos listados (2)
        </Text>
        <Image
          style={[styles.arrowIosUpwardIcon, styles.applicationStatus3Position]}
          contentFit="cover"
          source={require("@/src/assets/images/arrowiosupward.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 252,
    width: 328,
    position: "absolute",
  },
  groupLayout: {
    height: 16,
    width: 74,
    top: 0,
    position: "absolute",
  },
  seniorTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  lineIconLayout: {
    height: 1,
    width: 327,
    position: "absolute",
  },
  groupViewLayout: {
    height: 45,
    width: 128,
    left: 0,
    position: "absolute",
  },
  nameDescriptionPosition: {
    height: 14,
    width: 79,
    left: 0,
    top: 0,
    position: "absolute",
  },
  applicationStatus3Position: {
    height: 22,
    top: 0,
    position: "absolute",
  },
  seniorUiuxDesigner: {
    lineHeight: 22,
    fontSize: FontSize.bodyTextMSemibold_size,
    display: "flex",
    textAlign: "left",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    height: 16,
    width: 74,
    top: 0,
    position: "absolute",
    left: 0,
  },
  groupFrame: {
    left: 0,
  },
  groupWrapper: {
    left: 1,
  },
  lineIcon: {
    top: 58,
    left: 0,
  },
  seniorUiuxDesigner1: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 22,
    fontSize: FontSize.bodyTextMSemibold_size,
  },
  chip: {
    top: 28,
    height: 17,
    justifyContent: "center",
    width: 128,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  nameDescriptionParent: {
    top: 0,
  },
  groupView: {
    top: 76,
  },
  lineIcon1: {
    top: 215,
    left: 1,
  },
  groupContainer: {
    top: 36,
    height: 216,
    left: 0,
    width: 328,
    position: "absolute",
  },
  applicationStatus3: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    width: 214,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    height: 22,
    left: 1,
  },
  arrowIosUpwardIcon: {
    left: 304,
    width: 24,
    overflow: "hidden",
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  detalhesDaEmpresaDepartamInner: {
    top: 533,
    left: 23,
  },
});

export default GroupComponent2;
