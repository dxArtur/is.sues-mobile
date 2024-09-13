import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "@/GlobalStyles";

export type FrameComponent1Type = {
  cardano2?: ImageSourcePropType;
  showFrameView?: boolean;
};

const FrameComponent1 = ({ cardano2, showFrameView }: FrameComponent1Type) => {
  return (
    showFrameView && (
      <View style={styles.frameParent}>
        <View style={[styles.bgParent, styles.bgGroupLayout]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <View style={styles.groupWrapper}>
            <View style={styles.bgPosition}>
              <View style={styles.bgPosition}>
                <View style={styles.digitalMarketingParent}>
                  <Text style={styles.digitalMarketing}>Shell Brasil</Text>
                  <Text style={[styles.motorola, styles.motorolaTypo]}>
                    contato@shell.com.br
                  </Text>
                </View>
                <Image
                  style={styles.component2Icon}
                  contentFit="cover"
                  source={require("@/src/assets/images/component-2.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonShadowBox1}>
            <View style={styles.label}>
              <Text style={styles.largeLabelMedium16px}>Detalhes</Text>
            </View>
          </View>
          <View style={styles.buttonShadowBox}>
            <View style={styles.label}>
              <Text style={styles.largeLabelMedium16px}>Editar</Text>
            </View>
          </View>
        </View>
        <View style={[styles.bgGroup, styles.bgGroupLayout]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <View style={[styles.groupFrame, styles.groupPosition]}>
            <View style={styles.bgPosition}>
              <View style={styles.bgPosition}>
                <View style={styles.bgPosition}>
                  <View
                    style={[
                      styles.digitalMarketingGroup,
                      styles.digitalPosition,
                    ]}
                  >
                    <Text style={styles.digitalMarketing1}>Excelsior AI</Text>
                    <Text style={[styles.motorola1, styles.motorolaTypo]}>
                      contato@excelsior.com.br
                    </Text>
                  </View>
                  <View style={[styles.component2, styles.componentPosition]}>
                    <View style={[styles.component2Child, styles.bgPosition]} />
                    <Image
                      style={[styles.cardano2Icon, styles.iconPosition]}
                      contentFit="cover"
                      source={cardano2}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonShadowBox1}>
            <View style={styles.label}>
              <Text style={styles.largeLabelMedium16px}>Detalhes</Text>
            </View>
          </View>
          <View style={styles.buttonShadowBox}>
            <View style={styles.label}>
              <Text style={styles.largeLabelMedium16px}>Editar</Text>
            </View>
          </View>
        </View>
        <View style={[styles.bgContainer, styles.bgGroupLayout]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <View style={styles.buttonShadowBox1}>
            <View style={styles.label}>
              <Text style={styles.largeLabelMedium16px}>Detalhes</Text>
            </View>
          </View>
          <View style={styles.buttonShadowBox}>
            <View style={styles.label}>
              <Text style={styles.largeLabelMedium16px}>Editar</Text>
            </View>
          </View>
          <View style={[styles.groupWrapper2, styles.groupPosition]}>
            <View style={styles.bgPosition}>
              <View
                style={[
                  styles.digitalMarketingContainer,
                  styles.digitalPosition,
                ]}
              >
                <Text style={styles.digitalMarketing1}>Motorola</Text>
                <Text style={[styles.motorola1, styles.motorolaTypo]}>
                  contato@motorola.com.br
                </Text>
              </View>
              <View style={[styles.component21, styles.componentPosition]}>
                <View style={[styles.component2Child, styles.bgPosition]} />
                <Image
                  style={[styles.groupIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("@/src/assets/images/group.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  bgGroupLayout: {
    height: 128,
    left: 0,
    position: "absolute",
    width: 327,
  },
  bgPosition: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  motorolaTypo: {
    color: Color.colorDarkgray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
    left: "0%",
    position: "absolute",
  },
  groupPosition: {
    bottom: "52.34%",
    top: "9.38%",
    height: "38.28%",
    position: "absolute",
  },
  digitalPosition: {
    bottom: "2.04%",
    height: "97.96%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  componentPosition: {
    top: "2.04%",
    height: "97.96%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  iconPosition: {
    left: "16.67%",
    right: "16.67%",
    width: "66.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  bg: {
    borderRadius: Border.br_base,
    backgroundColor: Color.base3,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
  },
  digitalMarketing: {
    height: "50.49%",
    width: "61.59%",
    display: "flex",
    alignItems: "center",
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
  motorola: {
    height: "41.26%",
    top: "58.74%",
    width: "100%",
    color: Color.colorDarkgray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  digitalMarketingParent: {
    height: "97.17%",
    width: "69.7%",
    bottom: "2.83%",
    left: "30.3%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  component2Icon: {
    height: "97.88%",
    width: "24.24%",
    top: "2.12%",
    right: "75.76%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
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
  largeLabelMedium16px: {
    color: Color.base3,
    textAlign: "center",
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  label: {
    borderRadius: Border.br_5xl,
    width: 138,
    height: 56,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  buttonShadowBox1: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_45xl,
    height: 39,
    width: 111,
    backgroundColor: Color.primaryRegular,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowColor: "rgba(140, 100, 255, 0.16)",
    left: 50,
    top: 69,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  buttonShadowBox: {
    left: 201,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_45xl,
    justifyContent: "center",
    flexDirection: "row",
    height: 39,
    width: 111,
    backgroundColor: Color.primaryRegular,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowColor: "rgba(140, 100, 255, 0.16)",
    top: 69,
    alignItems: "center",
    position: "absolute",
  },
  bgParent: {
    top: 0,
  },
  digitalMarketing1: {
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
  motorola1: {
    top: "58.33%",
  },
  digitalMarketingGroup: {
    width: "72.48%",
    left: "27.52%",
  },
  component2Child: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.style,
  },
  cardano2Icon: {
    height: "66.67%",
    top: "16.67%",
    bottom: "16.67%",
  },
  component2: {
    width: "22.02%",
    right: "77.98%",
  },
  groupFrame: {
    right: "26.61%",
    left: "6.73%",
    width: "66.67%",
    bottom: "52.34%",
    top: "9.38%",
    height: "38.28%",
  },
  bgGroup: {
    top: 169,
  },
  digitalMarketingContainer: {
    width: "72.73%",
    left: "27.27%",
  },
  groupIcon: {
    height: "44.79%",
    top: "27.08%",
    bottom: "28.13%",
  },
  component21: {
    width: "21.82%",
    right: "78.18%",
  },
  groupWrapper2: {
    width: "67.28%",
    right: "25.69%",
    left: "7.03%",
    bottom: "52.34%",
    top: "9.38%",
    height: "38.28%",
  },
  bgContainer: {
    top: 338,
  },
  frameParent: {
    height: 537,
    width: 327,
  },
});

export default FrameComponent1;
