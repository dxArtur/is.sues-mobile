import { StyleSheet , StatusBar} from "react-native";
import { Color, Padding, FontSize, Border, Gap, FontFamily } from "@/GlobalStyles";

const styles = StyleSheet.create({
  managementScreenContainer: {
    flex: 1,
    backgroundColor: Color.base3,
    padding: Padding.p_xs,
    paddingTop: StatusBar.currentHeight || 0,
  },
  scrollContainer: {
    padding: Padding.p_xs, 
    paddingBottom: 50,
    top: 50,
  },
  welcomeText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansMedium,
    color: Color.colorMidnightblue,
    marginBottom: Gap.gap_lg,
    textAlign: "left",
    padding: Padding.p_xs,
    top: 30,
  },
  sectionContainer: {
    backgroundColor: Color.style,
    padding: Padding.p_xs,
    borderRadius: Border.br_xl,
    marginBottom: Gap.gap_sm,
  },
  sectionTitle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    color: Color.colorMidnightblue,
    marginBottom: Gap.gap_sm,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 18,
    color: '#765AC6',
  },
});

export default styles;
