import React, { useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
  buttonBackgroundColor?: string;
  textColor?: string;
  paddingHorizontal?: number | string;
  paddingVertical?: number | string;
  marginHorizontal?: number | string;
  marginVertical?: number | string;
  borderRadius?: number | string;
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
  buttonBackgroundColor = Color.primaryRegular, // Cor padrão para o fundo
  textColor = Color.colorGray_200, // Cor padrão para o texto
  paddingHorizontal = Padding.p_45xl, // Valor padrão do padding horizontal
  paddingVertical = Padding.p_sm, // Valor padrão do padding vertical
  marginHorizontal, // Margin horizontal customizável
  marginVertical, // Margin vertical customizável
  borderRadius = Border.br_xs,
}: Button1Type) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPosition),
      ...getStyleValue("top", buttonTop),
      ...getStyleValue("left", buttonLeft),
      ...getStyleValue("width", buttonWidth),
      ...getStyleValue("alignSelf", buttonAlignSelf),
      ...getStyleValue("height", buttonHeight),
      ...getStyleValue("paddingHorizontal", paddingHorizontal),
      ...getStyleValue("paddingVertical", paddingVertical),
      ...getStyleValue("marginHorizontal", marginHorizontal),
      ...getStyleValue("marginVertical", marginVertical),
      ...getStyleValue("borderRadius", borderRadius),
      backgroundColor: buttonBackgroundColor, // Aplica a cor de fundo personalizada
    };
  }, [
    buttonPosition,
    buttonTop,
    buttonLeft,
    buttonWidth,
    buttonAlignSelf,
    buttonHeight,
    buttonBackgroundColor,
    paddingHorizontal,
    paddingVertical,
    marginHorizontal,
    marginVertical,
    borderRadius,
  ]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.property1default, buttonStyle]}>
        <Text style={[styles.login, { color: textColor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  login: {
    fontSize: FontSize.bodyTextMSemibold_size,
    fontWeight: "600",
    fontFamily: FontFamily.bodyTextMSemibold,
    color: Color.colorGray_200,
    textAlign: "center", // Centraliza o texto
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
    backgroundColor: Color.primaryRegular,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button1;
