export interface CompanyDto {
    id?: string;
    name: string;
    email: string;
    password: string;
    latitude?: number;
    longitude?: number;
    description?: string|null;
    departments?: String[];
    headId: string
}