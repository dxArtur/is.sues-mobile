// styles.ts
import { StyleSheet } from "react-native";
import { Color, Border, Padding, FontFamily, FontSize } from "@/GlobalStyles";

const styles = StyleSheet.create({
  screenContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: Color.base3,
  },
  container: {
    top: 50,
    paddingTop: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorMidnightblue,
    textAlign: "center",
    marginBottom: Padding.p_5xl,
  },
  departmentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Padding.p_sm,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  departmentText: {
    fontSize: FontSize.size_base,
  },
  form: {
    marginHorizontal: Padding.p_5xl,
    paddingBottom: 50,
  },
  label: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansMedium,
    color: Color.colorMidnightblue,
    marginBottom: 5,
    marginTop: 10,
  },
});

export default styles;
