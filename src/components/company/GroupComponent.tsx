import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Button1 from "./Button1";
import { Color, Border, FontSize, FontFamily } from "@/GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={styles.bgParent}>
      <View style={[styles.bg, styles.bgBorder]} />
      <View style={styles.groupWrapper}>
        <View style={[styles.groupContainer, styles.groupContainerPosition]}>
          <View style={[styles.groupContainer, styles.groupContainerPosition]}>
            <View
              style={[
                styles.digitalMarketingWrapper,
                styles.groupContainerPosition1,
              ]}
            >
              <Text style={styles.digitalMarketing}>Jurídico</Text>
            </View>
            <Image
              style={[styles.component2Icon, styles.groupContainerPosition]}
              contentFit="cover"
              source={require("@/src/assets/images/component-21.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.bg1, styles.bgBorder]} />
      <Button1
        text="Editar"
        buttonPosition="absolute"
        buttonTop={17}
        buttonLeft={210}
        buttonWidth={83}
        buttonAlignSelf="unset"
        buttonHeight={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  groupContainerPosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  groupContainerPosition1: {
    left: "0%",
    right: "0%",
    width: "100%",
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
  },
  digitalMarketing: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorMidnightblue,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  digitalMarketingWrapper: {
    height: "50.12%",
    top: "0.72%",
    bottom: "49.16%",
    position: "absolute",
  },
  component2Icon: {
    width: "56.47%",
    right: "42.35%",
    left: "1.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupContainer: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupWrapper: {
    height: "32.42%",
    width: "25.99%",
    top: "11.48%",
    right: "69.42%",
    bottom: "56.09%",
    left: "4.59%",
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
    width: 327,
    height: 128,
    position: "absolute",
  },
});

export default GroupComponent;
