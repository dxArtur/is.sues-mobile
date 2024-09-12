import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Image } from 'expo-image';
import { FontSize, FontFamily, Color, Border } from "@/GlobalStyles";

interface FrameComponentProps {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
}

const FrameComponent: React.FC<FrameComponentProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.iconSearchParent}>
      <Image
        style={styles.iconSearch}
        contentFit="cover"
        source={require("@/src/assets/images/icon--search.png")}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor={Color.colorGray_100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconSearch: {
    top: 17,
    left: 16,
    width: 18,
    height: 18,
    overflow: "hidden",
    position: "absolute",
  },
  searchInput: {
    marginLeft: 40, // Afasta o texto do ícone de busca
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansMedium,
    color: Color.colorGray_100,
    flex: 1,
    height: 52,
    textAlign: "left",
  },
  iconSearchParent: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.base3,
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 327,
    height: 52,
    paddingLeft: 16,
  },
});

export default FrameComponent;
