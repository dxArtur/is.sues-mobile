import { ParamListBase } from '@react-navigation/native';

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {
      Welcome: undefined;
      Login: undefined;
      Register: undefined;
      Home: undefined;
      CriarEmpresa: { headid: string };
      BuscarEmpresas: undefined;
      DetalhesDaEmpresa;
      EditarEmpresa: { id: string };
      CriarDepartment: undefined;
      Profile: { userId: string };
    }
  }
}
