import { StyleSheet } from "react-native";
import { Color, Padding } from "@/GlobalStyles";

const styles = StyleSheet.create({
  container: {
    padding: Padding.p_5xl,
    paddingTop: Padding.p_45xl, // Espaço para a status bar
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: Color.base3,
  },
  title: {
    fontSize: 18,
    top: 20,
    fontWeight: "bold",
    marginBottom: Padding.p_base,
    color: Color.colorMidnightblue,
  },
  departmentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: Padding.p_sm,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: 8,
    marginBottom: Padding.p_sm,
    top: 20,
  },
  departmentText: {
    fontSize: 16,
    color: Color.colorMidnightblue,
  },
});

export default styles;
