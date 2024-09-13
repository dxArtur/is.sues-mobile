import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Modal2 from "@/src/components/company/Modal2";
import Button1 from "@/src/components/company/Button1";
import TextInput1 from "@/src/components/company/TextInput1";
import styles from "./styles"

const EditarEmpresa = () => {
  return (
    <View style={styles.editarEmpresa}>
      <Modal2
        jobDetails="Editar Empresa"
        component1={require("@/src/assets/images/component-11.png")}
        showSearchBar={false}
        component1IconLeft={120}
        cardano2={require("@/src/assets/images/cardano-22.png")}
        showFrameView={false}
      />
      <Button1
        text="Salvar Alterações"
        buttonPosition="absolute"
        buttonTop={735}
        buttonLeft={24}
        buttonWidth={327}
        buttonAlignSelf="unset"
        buttonHeight="unset"
      />
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.informaOsDetalhes}>
            Informa os detalhes da empresa para serem alterados
          </Text>
        </View>
        <View style={styles.heading}>
          <View style={styles.form}>
            <View style={styles.input}>
              <TextInput1
                text="Nome da empresa"
                textInputWidth="unset"
                textInputAlignSelf="stretch"
                textInputBackgroundColor="#f5f5f5"
                textInputBorderColor="#765ac6"
                textInputPaddingVertical="unset"
              />
              <TextInput1
                text="Email da empresa"
                textInputWidth="unset"
                textInputAlignSelf="stretch"
                textInputBackgroundColor="unset"
                textInputBorderColor="#d9d9d9"
                textInputPaddingVertical="unset"
              />
              <TextInput1
                text="Senha da empresa"
                textInputWidth="unset"
                textInputAlignSelf="stretch"
                textInputBackgroundColor="unset"
                textInputBorderColor="#d9d9d9"
                textInputPaddingVertical="unset"
              />
              <TextInput1
                text="Latitude"
                textInputWidth="unset"
                textInputAlignSelf="stretch"
                textInputBackgroundColor="#f5f5f5"
                textInputBorderColor="#765ac6"
                textInputPaddingVertical="unset"
              />
              <TextInput1
                text="Longitude"
                textInputWidth="unset"
                textInputAlignSelf="stretch"
                textInputBackgroundColor="#f5f5f5"
                textInputBorderColor="#765ac6"
                textInputPaddingVertical="unset"
              />
              <TextInput1
                text="Descrição da empresa"
                textInputWidth="unset"
                textInputAlignSelf="stretch"
                textInputBackgroundColor="#f5f5f5"
                textInputBorderColor="#765ac6"
                textInputPaddingVertical="unset"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditarEmpresa;
