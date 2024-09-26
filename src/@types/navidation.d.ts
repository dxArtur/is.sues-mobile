import { ParamListBase } from '@react-navigation/native';
import { Issue } from '../dtos/IssueDTO';

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {
      Welcome: undefined;
      Login: undefined;
      Register: undefined;
      Home;
      HomeStack;
      TestPage;
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
      UpdateProfilePictureScreen;
      Profile: { userId: string };
      DetailIssues: {issue: Issue};
      EditIssues;
    }
  }
}
