import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TextInput1 from "./TextInput1";
import Button1 from "./Button1";
import {
  FontFamily,
  FontSize,
  Color,
  Padding,
  Border,
  Gap,
} from "@/GlobalStyles";

const Container = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={[styles.informaOsDetalhes, styles.senhaDaEmpresaTypo]}>
          Informa os detalhes do departamento!
        </Text>
      </View>
      <View style={styles.heading}>
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
            <View style={styles.dropdown}>
              <Text style={styles.cursor}>|</Text>
              <Text style={[styles.senhaDaEmpresa, styles.senhaDaEmpresaTypo]}>
                Selecione a empresa
              </Text>
              <Image
                style={styles.arrowIosDownwardIcon}
                contentFit="cover"
                source={require("@/src/assets/images/arrowiosdownward.png")}
              />
            </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  senhaDaEmpresaTypo: {
    fontFamily: FontFamily.bodyTextSReg,
    fontSize: FontSize.bodyTextSReg_size,
    textAlign: "left",
  },
  informaOsDetalhes: {
    letterSpacing: -0.2,
    color: Color.text20LightBg,
    textAlign: "left",
    alignSelf: "stretch",
  },
  heading: {
    width: 375,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
  },
  cursor: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.3,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorMediumpurple_100,
    textAlign: "left",
  },
  senhaDaEmpresa: {
    flex: 1,
    letterSpacing: -0.1,
    color: Color.base1,
    textAlign: "left",
  },
  arrowIosDownwardIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  dropdown: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderBottomWidth: 1,
    width: 327,
    height: 52,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_base,
    gap: Gap.gap_sm,
    alignItems: "center",
  },
  input: {
    gap: Gap.gap_md,
    alignSelf: "stretch",
  },
  form: {
    alignSelf: "stretch",
    gap: Gap.gap_lg,
  },
  container: {
    gap: Gap.gap_lg,
    alignItems: "center",
  },
});

export default Container;
