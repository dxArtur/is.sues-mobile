import React, { useMemo } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "@/GlobalStyles";

export type TextInput1Type = {
  text?: string; // Placeholder para o input
  value?: string; // Valor do campo de texto
  onChangeText?: (text: string) => void; // Função de callback para mudanças no texto

  /** Style props */
  textInputWidth?: number | string;
  textInputAlignSelf?: string;
  textInputBackgroundColor?: string;
  textInputBorderColor?: string;
  textInputPaddingVertical?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const TextInput1 = ({
  text = "Enter your email",
  value,
  onChangeText,
  textInputWidth,
  textInputAlignSelf,
  textInputBackgroundColor,
  textInputBorderColor,
  textInputPaddingVertical,
}: TextInput1Type) => {
  const textInputStyle = useMemo(() => {
    return {
      ...getStyleValue("width", textInputWidth),
      ...getStyleValue("alignSelf", textInputAlignSelf),
      ...getStyleValue("backgroundColor", textInputBackgroundColor),
      ...getStyleValue("borderColor", textInputBorderColor),
      ...getStyleValue("paddingVertical", textInputPaddingVertical),
    };
  }, [
    textInputWidth,
    textInputAlignSelf,
    textInputBackgroundColor,
    textInputBorderColor,
    textInputPaddingVertical,
  ]);

  return (
    <View style={[styles.container, textInputStyle]}>
      <TextInput
        placeholder={text}
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    borderStyle: "solid",
    borderBottomWidth: 1,
    width: 370,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    gap: Gap.gap_sm,
  },
  textInput: {
    flex: 1,
    fontSize: FontSize.bodyTextSReg_size,
    letterSpacing: -0.1,
    fontFamily: FontFamily.bodyTextSReg,
    color: Color.base1,
  },
});

export default TextInput1;
