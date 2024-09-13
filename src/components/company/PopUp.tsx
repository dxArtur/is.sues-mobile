import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, FontSize, Padding, Border, Color } from "@/GlobalStyles";

export type PopUpType = {
  iconSuccess?: ImageSourcePropType;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PopUp = ({ propTop, propLeft, iconSuccess }: PopUpType) => {
  const popUpStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.popUp, popUpStyle]}>
      <Image
        style={styles.iconSuccess}
        contentFit="cover"
        source={iconSuccess}
      />
      <View style={styles.titleDesc}>
        <Text style={[styles.ullamcorperImperdietUrna, styles.mediumTypo]}>
          Essa ação não poderá ser revertida.
        </Text>
        <Text style={[styles.type32, styles.mediumFlexBox]}>Tem certeza?</Text>
      </View>
      <View style={styles.button}>
        <View style={[styles.button1, styles.buttonFlexBox]}>
          <View style={[styles.label, styles.labelFlexBox]}>
            <Text style={[styles.mediumLabelMedium14px, styles.mediumFlexBox]}>
              Cancel
            </Text>
          </View>
        </View>
        <View style={[styles.button2, styles.buttonFlexBox]}>
          <View style={[styles.label1, styles.labelFlexBox]}>
            <Text style={[styles.mediumLabelMedium14px1, styles.mediumFlexBox]}>
              Apagar
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mediumTypo: {
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyTextMSemibold_size,
  },
  mediumFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 115,
    height: 46,
    top: 0,
    position: "absolute",
  },
  labelFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_xl,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 46,
  },
  iconSuccess: {
    top: 32,
    left: 103,
    width: 101,
    height: 101,
    overflow: "hidden",
    position: "absolute",
  },
  ullamcorperImperdietUrna: {
    top: 30,
    color: Color.colorGray_100,
    textAlign: "center",
    letterSpacing: 0,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyTextMSemibold_size,
    left: 0,
    width: 238,
    position: "absolute",
  },
  type32: {
    left: 58,
    fontSize: FontSize.size_lg,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorMidnightblue,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  titleDesc: {
    top: 157,
    left: 34,
    height: 74,
    width: 238,
    position: "absolute",
  },
  mediumLabelMedium14px: {
    color: Color.base3,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyTextMSemibold_size,
  },
  label: {
    backgroundColor: Color.colorMidnightblue,
  },
  button1: {
    left: 127,
  },
  mediumLabelMedium14px1: {
    color: Color.colorMidnightblue,
    textAlign: "left",
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyTextMSemibold_size,
  },
  label1: {
    borderStyle: "solid",
    borderColor: Color.colorMidnightblue,
    borderWidth: 1,
  },
  button2: {
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 115,
  },
  button: {
    top: 255,
    left: 32,
    width: 242,
    height: 46,
    position: "absolute",
  },
  popUp: {
    top: 374,
    left: 37,
    borderRadius: Border.br_base,
    backgroundColor: Color.base3,
    width: 306,
    height: 333,
    position: "absolute",
  },
});

export default PopUp;
