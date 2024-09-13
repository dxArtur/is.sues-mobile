import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TextInput1 from "./TextInput1";
import Button1 from "./Button1";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Gap,
  Padding,
} from "@/GlobalStyles";

const Content = () => {
  return (
    <View style={styles.content}>
      <View style={styles.form}>
        <View style={styles.input}>
          <TextInput1
            text="Nome do departamento"
            textInputWidth="unset"
            textInputAlignSelf="stretch"
            textInputBackgroundColor="unset"
            textInputBorderColor="#d9d9d9"
            textInputPaddingVertical="unset"
          />
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.bgParent, styles.frameLayout]}>
            <View style={[styles.bg, styles.bgBorder]} />
            <View style={styles.groupWrapper}>
              <View style={[styles.groupContainer, styles.component2Position]}>
                <View
                  style={[styles.groupContainer, styles.component2Position]}
                >
                  <View
                    style={[
                      styles.digitalMarketingParent,
                      styles.digitalPosition,
                    ]}
                  >
                    <Text style={[styles.digitalMarketing, styles.digitalTypo]}>
                      Shell Brasil
                    </Text>
                    <Text style={[styles.motorola, styles.motorolaTypo]}>
                      contato@shell.com.br
                    </Text>
                  </View>
                  <Image
                    style={[styles.component2Icon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("@/src/assets/images/component-2.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.bg1, styles.bgBorder]} />
          </View>
          <View style={[styles.groupFrame, styles.frameLayout]}>
            <View style={[styles.groupView, styles.groupViewLayout]}>
              <View style={[styles.groupContainer, styles.component2Position]}>
                <View
                  style={[styles.groupContainer, styles.component2Position]}
                >
                  <View
                    style={[styles.groupContainer, styles.component2Position]}
                  >
                    <View
                      style={[
                        styles.digitalMarketingGroup,
                        styles.component2Layout,
                      ]}
                    >
                      <Text style={styles.digitalTypo}>Excelsior AI</Text>
                      <Text style={[styles.motorola1, styles.motorolaTypo]}>
                        contato@excelsior.com.br
                      </Text>
                    </View>
                    <View style={[styles.component2, styles.component2Layout]}>
                      <View
                        style={[
                          styles.component2Child,
                          styles.component2Position,
                        ]}
                      />
                      <Image
                        style={[styles.cardano2Icon, styles.groupViewLayout]}
                        contentFit="cover"
                        source={require("@/src/assets/images/cardano-2.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameChild, styles.frameLayout]} />
        </View>
        <Button1
          text="Criar"
          buttonPosition="unset"
          buttonTop="unset"
          buttonLeft="unset"
          buttonWidth="unset"
          buttonAlignSelf="stretch"
          buttonHeight="unset"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 128,
    position: "absolute",
    width: 327,
  },
  bgBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.base3,
    borderRadius: Border.br_base,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  component2Position: {
    bottom: "0%",
    left: "0%",
  },
  digitalPosition: {
    right: "0%",
    top: "0%",
  },
  digitalTypo: {
    textAlign: "left",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  motorolaTypo: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    letterSpacing: 0,
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupViewLayout: {
    width: "66.67%",
    position: "absolute",
  },
  component2Layout: {
    height: "97.96%",
    position: "absolute",
  },
  input: {
    alignSelf: "stretch",
  },
  bg: {
    height: "54.69%",
    bottom: "45.31%",
    top: "0%",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.base3,
    borderRadius: Border.br_base,
    left: "0%",
  },
  digitalMarketing: {
    height: "50.49%",
    width: "61.59%",
    display: "flex",
    alignItems: "center",
  },
  motorola: {
    height: "41.26%",
    top: "58.74%",
    width: "100%",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  digitalMarketingParent: {
    height: "97.17%",
    width: "69.7%",
    bottom: "2.83%",
    left: "30.3%",
    position: "absolute",
  },
  component2Icon: {
    height: "97.88%",
    width: "24.24%",
    top: "2.12%",
    right: "75.76%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  groupContainer: {
    height: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
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
  bg1: {
    height: "53.13%",
    top: "68.75%",
    bottom: "-21.87%",
  },
  bgParent: {
    top: 0,
    left: 0,
    height: 128,
  },
  motorola1: {
    top: "58.33%",
  },
  digitalMarketingGroup: {
    width: "72.48%",
    bottom: "2.04%",
    left: "27.52%",
    right: "0%",
    top: "0%",
  },
  component2Child: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.style,
    height: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  cardano2Icon: {
    height: "66.67%",
    top: "16.67%",
    right: "16.67%",
    bottom: "16.67%",
    left: "16.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  component2: {
    width: "22.02%",
    top: "2.04%",
    right: "77.98%",
    bottom: "0%",
    left: "0%",
  },
  groupView: {
    height: "38.28%",
    top: "9.38%",
    right: "26.61%",
    bottom: "52.34%",
    left: "6.73%",
  },
  groupFrame: {
    top: 88,
    left: -2,
  },
  frameChild: {
    top: 338,
    left: 0,
    height: 128,
  },
  frameParent: {
    height: 225,
    width: 327,
  },
  form: {
    height: 305,
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  content: {
    width: 375,
    height: 247,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
  },
});

export default Content;
