import { PersonType, PhoneType } from '../generated/prisma';

export type CreateUserDTO = {
  name: string;
  cpf: string;
  personType: PersonType;
};

export type CreateInvalidCPFDTO = {
  blockedCPF: string;
};

export type CreateCnpjDTO = {
  cnpj?: string;
};

export type CreateUserCnpjDTO = {
  usersId: number;
  cnpjsId: number;
};

export type CreatePhoneDTO = {
  number: string;
  phoneType: PhoneType;
  usersId: number;
};

export type CreateEmailDTO = {
  email: string,
  usersId: number;
};

export type CreateAddressDTO = {
  cep: string,
  street: string,
  number: number,
  complement: string,
  city: string,
  district: string,
  state: string,
  usersId: number;
};
