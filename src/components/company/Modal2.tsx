import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent1 from "./FrameComponent1";
import { FontSize, FontFamily, Color, Border, Padding, Gap } from "@/GlobalStyles";

export type Modal2Type = {
  jobDetails?: string;
  component1?: ImageSourcePropType;
  showSearchBar?: boolean;
  cardano2?: ImageSourcePropType;
  showFrameView?: boolean;

  /** Style props */
  component1IconLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Modal2 = ({ jobDetails, component1, component1IconLeft, cardano2, showFrameView }: Modal2Type) => {
  const navigation = useNavigation(); // Hook para navegação

  const jobDetails1Style = useMemo(() => {
    return {
      ...getStyleValue("left", component1IconLeft),
    };
  }, [component1IconLeft]);

  return (
    <View style={styles.modal}>
      <View style={styles.appBar}>
        {/* Seta para voltar */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={[styles.component1Icon, styles.component3Layout]}
            contentFit="cover"
            source={component1}
          />
        </TouchableOpacity>
        <Text style={[styles.jobDetails, jobDetails1Style]}>{jobDetails}</Text>
        <View style={[styles.component3, styles.component3Layout]} />
      </View>
      <FrameComponent1 cardano2={cardano2} showFrameView={showFrameView} />
    </View>
  );
};

const styles = StyleSheet.create({
  component3Layout: {
    height: 24,
    width: 24,
    top: 13,
    position: "absolute",
  },
  jobDetails: {
    top: 12,
    left: 111,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorMidnightblue,
    textAlign: "center",
    position: "absolute",
  },
  component1Icon: {
    left: 24,
  },
  component3: {
    left: 335,
  },
  appBar: {
    width: 375,
    height: 50,
  },
  modal: {
    bottom: 0,
    left: 0,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    backgroundColor: Color.base3,
    height: 760,
    alignItems: "center",
    paddingTop: Padding.p_13xl,
    paddingBottom: Padding.p_37xl,
    gap: Gap.gap_lg,
    position: "absolute",
  },
});

export default Modal2;
