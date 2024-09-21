import { StyleSheet } from "react-native";
import { Gap, FontFamily, FontSize, Padding, Color } from "@/GlobalStyles";

const styles = StyleSheet.create({
  screenContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: Color.base3,
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
  container: {
    top:50,
    paddingTop: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  mapContainer: {
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
