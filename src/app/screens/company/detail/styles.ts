import { StyleSheet } from "react-native";
import { FontFamily, FontSize, Border, Color } from "@/GlobalStyles";
import { colors } from "@/src/styles/colors";

const styles = StyleSheet.create({
  detalhesDaEmpresaDescri: {
    flex: 1,
    backgroundColor: colors.backgroundPrincipal, //'#fff',
    padding: 20,
  },
  descriptionSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: colors.backgroundSecundary, //"#F5F5F5", // Cor de fundo suave
    borderRadius: 5, //Border.br_base,
    borderBottomColor: colors.borderPrincipal,
    borderBottomWidth:2,
    shadowColor: "#000", // Sombra suave
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flex: 0,
  },
  descriptionTitle: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.plusJakartaSansBold,
    fontWeight: "bold",
    color: Color.colorMidnightblue,
    marginBottom: 10, 
  },
  descriptionText: {
    fontSize: FontSize.size_base, 
    fontFamily: FontFamily.plusJakartaSansMedium,
    color: Color.colorDarkgray, 
    paddingVertical: 5, 
    paddingHorizontal: 10,
    borderBottomWidth: 1, 
    borderBottomColor: Color.colorGainsboro_200,
  },
  departmentListContainer: {
    height: 150, 
    marginTop: 10,
  },
  companyDetails: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  companyDetailText: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    color: Color.colorMidnightblue,
    marginLeft: 10,
  },
  
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: Border.br_xs,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#765AC6",
  },
  tabText: {
    fontSize: FontSize.bodyTextMSemibold_size,
    fontWeight: "600",
    fontFamily: FontFamily.bodyTextMSemibold,
    color: Color.colorGray_200,
  },
  buttonContainer: {
    marginTop: 20, // Para garantir espaçamento após as tabs
    width: "100%",
    alignItems: "center",
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
