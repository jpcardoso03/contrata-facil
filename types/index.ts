export type UserType = 'candidato' | 'contratante';

export interface User {
  email: string;
  password: string;
  userType: UserType;
}

export interface Candidato extends User {
  nomeCompleto: string;
  cpf: string;
}

export interface Contratante extends User {
  nomeCompleto: string;
  cpf: string;
}