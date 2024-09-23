import { UsersDto } from "./UserDTO";

export interface DepartmentDto {
    id?: string;
    name: string;
    companyId: string;
    issues?: string[] | null;
    labels?: string[] | null;
    //users?: string[] | null;
    users: UsersDto[];
  }

