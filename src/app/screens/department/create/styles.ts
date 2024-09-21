import { StyleSheet } from "react-native";
import { Color, Border, Padding, FontFamily, FontSize } from "@/GlobalStyles";

const styles = StyleSheet.create({
  appBar: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    backgroundColor: Color.base3,
    flex: 1,
    alignItems: "center",
    paddingTop: Padding.p_13xl,
    paddingBottom: Padding.p_37xl,
  },
  screenContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: Color.base3,
  },
  container: {
    top:50,
    paddingTop: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansMedium,
    color: Color.colorMidnightblue,
    marginBottom: 5,
    marginTop: 10,
  },
  form: {
    marginHorizontal: Padding.p_5xl,
  },
});

export default styles;
