import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "@/GlobalStyles";

const JobDetail = () => {
  return (
    <View style={styles.jobDetail}>
      <View style={styles.frame162721list}>
        <View style={styles.salary} />
      </View>
      <View style={[styles.icon, styles.bgLayout]}>
        <View style={[styles.bg, styles.bgLayout]} />
        <Image
          style={styles.workIcon}
          contentFit="cover"
          source={require("@/src/assets/images/work.png")}
        />
      </View>
      <Text style={styles.jobType}>Empresa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    height: 47,
    width: 48,
    top: 0,
    position: "absolute",
  },
  remoteFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  remote: {
    top: 243,
    textAlign: "center",
    justifyContent: "center",
    width: 160,
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
  bgPosition: {
    top: 0,
    left: 0,
  },
  salary1: {
    top: 54,
    left: 11,
    textAlign: "left",
  },
  salary: {
    width: 67,
    height: 102,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pngwingcom71: {
    width: 51,
    height: 51,
    left: 0,
    position: "absolute",
  },
  jobTypeTypo: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  frame162721list: {
    top: 20,
    left: 3,
    width: 297,
    height: 99,
    position: "absolute",
  },
  bg: {
    borderRadius: Border.br_47xl,
    backgroundColor: Color.colorMediumpurple_200,
    opacity: 0.12,
    left: 0,
  },
  workIcon: {
    top: 12,
    left: 13,
    width: 24,
    height: 23,
    overflow: "hidden",
    position: "absolute",
  },
  icon: {
    left: 1,
  },
  jobType: {
    top: 53,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.plusJakartaSansMedium,
    color: Color.colorDarkgray,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 52,
    height: 20,
    left: 0,
    position: "absolute",
  },
  jobDetail: {
    top: 229,
    left: 15,
    width: 300,
    height: 119,
    position: "absolute",
  },
});

export default JobDetail;
