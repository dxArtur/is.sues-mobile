import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "@/GlobalStyles";

export type Button1Type = {
  text?: string;
  onPress?: () => void;

  /** Style props */
  buttonPosition?: string;
  buttonTop?: number | string;
  buttonLeft?: number | string;
  buttonWidth?: number | string;
  buttonAlignSelf?: string;
  buttonHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Button1 = ({
  text = "Login",
  onPress,
  buttonPosition,
  buttonTop,
  buttonLeft,
  buttonWidth,
  buttonAlignSelf,
  buttonHeight,
}: Button1Type) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPosition),
      ...getStyleValue("top", buttonTop),
      ...getStyleValue("left", buttonLeft),
      ...getStyleValue("width", buttonWidth),
      ...getStyleValue("alignSelf", buttonAlignSelf),
      ...getStyleValue("height", buttonHeight),
    };
  }, [
    buttonPosition,
    buttonTop,
    buttonLeft,
    buttonWidth,
    buttonAlignSelf,
    buttonHeight,
  ]);

  return (
    <View style={[styles.property1default, buttonStyle]}>
      <Text style={styles.login} onPress={onPress}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    fontSize: FontSize.bodyTextMSemibold_size,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: FontFamily.bodyTextMSemibold,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  property1default: {
    shadowColor: "rgba(140, 100, 255, 0.16)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderRadius: Border.br_xs,
    backgroundColor: Color.primaryRegular,
    width: 327,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_45xl,
    paddingVertical: Padding.p_sm,
  },
});

export default Button1;
