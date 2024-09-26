import { StyleSheet } from "react-native";
import { Color, FontSize, Padding } from "@/GlobalStyles";

const styles = StyleSheet.create({
  container: {
    padding: Padding.p_5xl,
    paddingTop: Padding.p_45xl, 
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: Color.base3,
  },
  departmentName: {
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
    color: Color.colorMidnightblue,
    marginBottom: Padding.p_base,
    top:20,
  },
  sectionTitle: {
    fontSize: FontSize.size_mini,
    fontWeight: "bold",
    color: Color.colorMidnightblue,
    marginBottom: Padding.p_sm,
    top:10,
  },
  noEmployeesText: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    marginBottom: Padding.p_base,
  },
  employeeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Padding.p_sm,
    padding: Padding.p_sm,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: 8,
  },
  employeePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: Padding.p_sm,
  },
  employeeDetails: {
    flex: 1,
  },
  employeeName: {
    fontSize: FontSize.size_base,
    fontWeight: "bold",
    color: Color.colorMidnightblue,
  },
  employeeEmail: {
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
  },
});

export default styles;
