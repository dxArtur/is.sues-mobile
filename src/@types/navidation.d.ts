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
      ManageCompany;
      EditarEmpresa: { id: string };
      CriarDepartment: undefined;
      EditarDepartamentos;
      DeletarDepartamentos;
      CriarFuncionario;
      EditarFuncionario: { id: string };
      SelecionarFuncionarioParaEditar;
      DeletarFuncionario;
      CriarLabel;
      EditarLabel;
      DeletarLabel;
      Profile: { userId: string };
    }
  }
}
