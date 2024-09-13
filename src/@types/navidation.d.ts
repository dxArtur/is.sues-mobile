import { ParamListBase } from '@react-navigation/native';

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {
      Welcome: undefined;
      Login: undefined;
      Register: undefined;
      Home: undefined;
      CriarEmpresa: undefined;
      BuscarEmpresas: undefined;
      DetalhesDaEmpresa: { id: string };
      EditarEmpresa: { id: string };
      CriarDepartment: undefined;
      Profile: { userId: string };
    }
  }
}
