import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "@/GlobalStyles";

const GroupComponent1 = () => {
  return (
    <View style={[styles.jobDetailParent, styles.groupChildLayout]}>
      <View style={styles.jobDetail}>
        <View style={styles.frame162721list}>
          <View style={[styles.salary, styles.bgPosition]} />
        </View>
        <View style={[styles.icon, styles.bgLayout]}>
          <View style={[styles.bg, styles.bgLayout]} />
          <Image
            style={styles.workIcon}
            contentFit="cover"
            source={require("@/src/assets/images/work.png")}
          />
        </View>
        <Text style={[styles.jobType, styles.remoteFlexBox]}>Empresa</Text>
        <Text style={[styles.remote, styles.k11kTypo]}>Company Ltda</Text>
        <Text style={[styles.k11k, styles.k11kTypo]}>
          contato@company.com.br
        </Text>
        <Image
          style={[styles.pngwingcom71, styles.bgPosition]}
          contentFit="cover"
          source={require("@/src/assets/images/pngwingcom-7-1.png")}
        />
        <Text style={[styles.salary1, styles.jobTypeTypo]}>Email</Text>
      </View>
      <Image
        style={[styles.groupChild, styles.bgPosition]}
        contentFit="cover"
        source={require("@/src/assets/images/group-162896.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 332,
    position: "absolute",
  },
  bgPosition: {
    top: 0,
    left: 0,
  },
  bgLayout: {
    height: 47,
    width: 48,
    position: "absolute",
  },
  remoteFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  k11kTypo: {
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyTextMSemibold_size,
    left: 62,
    letterSpacing: 0,
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
  salary: {
    width: 67,
    height: 102,
    left: 0,
    position: "absolute",
  },
  frame162721list: {
    top: 104,
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
    top: 0,
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
    top: 84,
    left: 1,
  },
  jobType: {
    top: 137,
    width: 52,
    height: 20,
    textAlign: "left",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    position: "absolute",
    left: 0,
  },
  remote: {
    top: 98,
    textAlign: "center",
    justifyContent: "center",
    width: 160,
    alignItems: "center",
    display: "flex",
  },
  k11k: {
    top: 15,
    textAlign: "left",
  },
  pngwingcom71: {
    width: 51,
    height: 51,
    left: 0,
    position: "absolute",
  },
  salary1: {
    top: 54,
    left: 11,
    textAlign: "left",
  },
  jobDetail: {
    left: 12,
    width: 300,
    height: 203,
    top: 145,
    position: "absolute",
  },
  groupChild: {
    height: 132,
    left: 0,
    width: 332,
    position: "absolute",
  },
  jobDetailParent: {
    left: 24,
    height: 348,
    top: 145,
  },
});

export default GroupComponent1;
